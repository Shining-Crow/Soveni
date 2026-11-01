/**
 * Default content. Used to seed the database and as a fallback when no
 * DATABASE_URL is configured (e.g. local design work). All copy is draft and
 * subject to client approval — see Development Plan §14.
 */

export type ServiceTheme = "PRESENCE" | "AUDIENCE" | "JOURNEY";

export type ServiceContent = {
  slug: string;
  title: string;
  summary: string;
  headline: string;
  intro: string;
  need: string;
  inclusions: string[];
  process: string[];
  exclusions: string[];
  theme: ServiceTheme;
  icon: string;
  order: number;
  faqs: { question: string; answer: string }[];
};

export type FaqContent = { question: string; answer: string };

export type CaseStudyContent = {
  slug: string;
  title: string;
  clientName: string;
  summary: string;
  role: string;
  deliverables: string[];
  outcome: string | null;
  imageUrl: string | null;
  tags: string[];
  attribution: string | null;
};

export const themes: Record<
  ServiceTheme,
  { title: string; label: string; description: string }
> = {
  PRESENCE: {
    label: "Design and build",
    title: "Websites and apps people enjoy using",
    description:
      "Thoughtful design and solid engineering for the websites, web apps and mobile apps your customers rely on.",
  },
  AUDIENCE: {
    label: "Launch new products",
    title: "Turn an idea into a working product",
    description:
      "SaaS platforms and practical AI features, planned and built in stages so you can launch and learn quickly.",
  },
  JOURNEY: {
    label: "Scale with confidence",
    title: "Infrastructure that keeps up with growth",
    description:
      "Backends, integrations, cloud infrastructure and testing that keep your product fast, secure and reliable.",
  },
};

export const services: ServiceContent[] = [
  {
    slug: "web-development",
    title: "Web Development",
    summary: "High-performing websites and web applications.",
    headline: "Websites and web apps built to perform.",
    intro:
      "We design and build fast, accessible websites and web applications with modern frameworks, so your business looks credible and your users get things done.",
    need:
      "Your website is often the first conversation a customer has with you. If it is slow, dated or hard to use on a phone, people leave before they find out what you offer.",
    inclusions: [
      "Discovery, sitemap and technical planning",
      "Responsive builds with Next.js, React or WordPress",
      "Content management so your team can edit pages",
      "Performance, accessibility and SEO foundations",
      "Analytics, forms and third-party integrations",
      "Hosting, care and maintenance plans",
    ],
    process: [
      "Understand your goals, users and existing systems",
      "Shape the structure, design and technical approach",
      "Deliver the build in stages with preview links",
      "Refine after launch using real usage data",
    ],
    exclusions: [
      "Copywriting and photography are quoted separately unless agreed",
      "Third-party licences, plugins and domain costs are passed on at cost",
    ],
    theme: "PRESENCE",
    icon: "web",
    order: 1,
    faqs: [
      {
        question: "Which technologies do you use?",
        answer:
          "We recommend what suits each project — usually Next.js and React for custom builds, or WordPress where familiar self-editing matters most.",
      },
      {
        question: "Can I update the website myself?",
        answer:
          "Yes. Every site includes an editing area for approved text and images, along with simple instructions.",
      },
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    summary: "Native and cross-platform apps for iOS and Android.",
    headline: "Mobile apps your customers keep coming back to.",
    intro:
      "We design and build iOS and Android apps, natively or with cross-platform frameworks, and guide you through store submission and launch.",
    need:
      "Customers expect fast, polished mobile experiences. A clunky app gets deleted, while a good one keeps your business in their pocket.",
    inclusions: [
      "Product discovery and feature prioritisation",
      "Native iOS and Android, or React Native and Flutter",
      "App design, prototyping and usability testing",
      "Push notifications, payments and offline support",
      "App Store and Google Play submission",
      "Ongoing updates and OS compatibility support",
    ],
    process: [
      "Understand your users and the core problem to solve",
      "Shape the feature set and prototype key flows",
      "Deliver in sprints with test builds on your device",
      "Refine using analytics and store feedback",
    ],
    exclusions: ["Apple and Google developer account fees are paid by the client"],
    theme: "PRESENCE",
    icon: "mobile",
    order: 2,
    faqs: [
      {
        question: "Native or cross-platform?",
        answer:
          "Cross-platform suits most apps and keeps one codebase. We recommend native when an app relies heavily on device features or demanding performance.",
      },
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    summary: "Practical AI integrations and intelligent products.",
    headline: "Practical AI that solves real business problems.",
    intro:
      "We help you find where AI genuinely adds value, then build and integrate it — from assistants and search to document processing and automation.",
    need:
      "AI can save time and unlock new products, but only when it is applied to the right problem with care for accuracy, privacy and cost.",
    inclusions: [
      "AI opportunity workshop and feasibility review",
      "Chat assistants, smart search and knowledge bases",
      "Document processing and workflow automation",
      "Integration with your existing tools and data",
      "Evaluation, guardrails and cost monitoring",
    ],
    process: [
      "Understand your workflows and where time is lost",
      "Shape a focused proof of concept",
      "Deliver a production-ready integration",
      "Refine accuracy and cost with real usage",
    ],
    exclusions: ["AI model and API usage costs are paid directly to the provider"],
    theme: "AUDIENCE",
    icon: "ai",
    order: 3,
    faqs: [
      {
        question: "Is our data safe?",
        answer:
          "We design every integration around your data policies, use providers that do not train on your data, and agree data handling with you in writing.",
      },
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    summary: "Scalable SaaS platforms from idea to launch.",
    headline: "From idea to a SaaS product customers pay for.",
    intro:
      "We plan, design and build SaaS platforms — starting with a focused first version and scaling the product as your customer base grows.",
    need:
      "Many products fail by building too much before launch. A lean, well-architected first version gets you to paying customers sooner.",
    inclusions: [
      "Product strategy and MVP scoping",
      "Multi-tenant architecture and user management",
      "Subscriptions and billing with Stripe",
      "Admin dashboards and reporting",
      "Scalable hosting and monitoring",
    ],
    process: [
      "Understand the market, users and business model",
      "Shape the MVP scope and architecture",
      "Deliver in sprints with regular demos",
      "Refine the product from customer feedback",
    ],
    exclusions: ["Third-party service subscriptions are paid by the client"],
    theme: "AUDIENCE",
    icon: "cloud",
    order: 4,
    faqs: [
      {
        question: "How long does an MVP take?",
        answer:
          "It depends on scope, but a focused first version typically takes a few months. We agree milestones up front so you can see progress throughout.",
      },
    ],
  },
  {
    slug: "backend-apis",
    title: "Backend & APIs",
    summary: "Robust backends, APIs and system integrations.",
    headline: "Robust backends that connect everything.",
    intro:
      "We design and build secure backends and APIs, and integrate the systems your business already runs on, so data flows where it needs to.",
    need:
      "Disconnected systems create manual work and errors. A well-designed backend is the reliable foundation every product depends on.",
    inclusions: [
      "API design with REST or GraphQL",
      "Database design and data migration",
      "Third-party and legacy system integrations",
      "Authentication, permissions and security",
      "Documentation and automated tests",
    ],
    process: [
      "Understand your systems, data and constraints",
      "Shape the architecture and API contracts",
      "Deliver services with tests and documentation",
      "Refine performance and reliability over time",
    ],
    exclusions: ["Licences for third-party platforms are paid by the client"],
    theme: "JOURNEY",
    icon: "database",
    order: 5,
    faqs: [
      {
        question: "Can you work with our existing systems?",
        answer:
          "Yes. We regularly integrate with CRMs, ERPs, payment providers and older in-house systems.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    summary: "Secure, scalable infrastructure and modern DevOps.",
    headline: "Infrastructure that scales without surprises.",
    intro:
      "We set up and manage cloud infrastructure, deployment pipelines and monitoring, so releases are routine and downtime is rare.",
    need:
      "Manual deployments and unmonitored servers slow teams down and put customers at risk. Good DevOps makes shipping safe and fast.",
    inclusions: [
      "Cloud setup on AWS, Google Cloud or Azure",
      "CI/CD pipelines and automated deployments",
      "Infrastructure as code",
      "Monitoring, alerting and backups",
      "Security hardening and cost optimisation",
    ],
    process: [
      "Understand your current setup and risks",
      "Shape the target infrastructure and migration plan",
      "Deliver changes safely, with rollback in place",
      "Refine cost, performance and resilience",
    ],
    exclusions: ["Cloud hosting costs are billed directly by the provider"],
    theme: "JOURNEY",
    icon: "cloud",
    order: 6,
    faqs: [
      {
        question: "Can you reduce our cloud bill?",
        answer:
          "Often, yes. We review usage and right-size resources, and report the savings we find.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    summary: "User-centred designs that drive engagement.",
    headline: "Design that makes complex things feel simple.",
    intro:
      "We research, design and test interfaces for websites and apps, creating clear user journeys and consistent design systems.",
    need:
      "Users judge a product within seconds. Confusing interfaces cost sign-ups and sales, however good the technology behind them.",
    inclusions: [
      "User research and journey mapping",
      "Wireframes and interactive prototypes",
      "Visual interface design",
      "Design systems and component libraries",
      "Usability testing and accessibility reviews",
    ],
    process: [
      "Understand your users and their goals",
      "Shape flows and wireframes for feedback",
      "Deliver polished designs ready for development",
      "Refine through testing with real users",
    ],
    exclusions: ["Research participant incentives are quoted separately"],
    theme: "PRESENCE",
    icon: "design",
    order: 7,
    faqs: [
      {
        question: "Do you work in Figma?",
        answer: "Yes. You get full access to the Figma files and design system at handover.",
      },
    ],
  },
  {
    slug: "qa-testing",
    title: "QA & Testing",
    summary: "Reliable testing for high-quality products.",
    headline: "Ship with confidence, every release.",
    intro:
      "We test websites, apps and APIs manually and automatically, catching problems before your customers do.",
    need:
      "Bugs in production damage trust and cost far more to fix than bugs caught early. Consistent testing keeps quality high as you grow.",
    inclusions: [
      "Test strategy and test planning",
      "Manual and exploratory testing",
      "Automated end-to-end and API tests",
      "Cross-browser and device testing",
      "Performance and accessibility testing",
    ],
    process: [
      "Understand your product and its risk areas",
      "Shape a test plan and coverage goals",
      "Deliver testing and clear bug reports",
      "Refine automation as the product evolves",
    ],
    exclusions: ["Device lab or testing platform subscriptions are passed on at cost"],
    theme: "JOURNEY",
    icon: "qa",
    order: 8,
    faqs: [
      {
        question: "Can you test a product another team built?",
        answer:
          "Yes. We can audit and test existing products, and set up automated tests your own team can maintain.",
      },
    ],
  },
];

export const homeFaqs: FaqContent[] = [
  {
    question: "What size of business do you work with?",
    answer:
      "Mainly small and medium-sized businesses that want a professional online presence and a dependable partner to help them grow.",
  },
  {
    question: "Do you do all of the work in-house?",
    answer:
      "We lead every project and manage it from start to finish. For specialist work we bring in trusted collaborators, so you get the right expertise with one point of contact.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Every project is scoped individually. After an initial conversation we send a clear proposal with costs, timings and what is included.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "Usually within a couple of weeks of agreeing a proposal, depending on scope and how quickly content is available.",
  },
];

/** No case studies ship by default: they require verified client permission. */
export const caseStudies: CaseStudyContent[] = [];

export const siteSettings = {
  /** Leave empty until verified — empty values are not rendered. */
  contactEmail: "",
  contactPhone: "",
  companyName: "Soveni",
  companyLocation: "United Kingdom",
};

export type SiteSettings = typeof siteSettings;
