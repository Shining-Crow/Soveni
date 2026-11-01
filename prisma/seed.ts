import { homeFaqs, services, siteSettings } from "../src/content/defaults";
import { createPrismaClient } from "../src/lib/prisma";

const prisma = createPrismaClient();

async function main() {
  // Remove services that are no longer offered (their FAQs cascade).
  await prisma.service.deleteMany({
    where: { slug: { notIn: services.map((s) => s.slug) } },
  });

  for (const { faqs, ...service } of services) {
    const saved = await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
    await prisma.faq.deleteMany({ where: { serviceId: saved.id } });
    await prisma.faq.createMany({
      data: faqs.map((faq, order) => ({ ...faq, order, serviceId: saved.id })),
    });
  }

  await prisma.faq.deleteMany({ where: { serviceId: null } });
  await prisma.faq.createMany({
    data: homeFaqs.map((faq, order) => ({ ...faq, order, showOnHome: true })),
  });

  for (const [key, value] of Object.entries(siteSettings)) {
    await prisma.siteSetting.upsert({ where: { key }, update: {}, create: { key, value } });
  }

  console.log(`Seeded ${services.length} services and ${homeFaqs.length} home FAQs.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
