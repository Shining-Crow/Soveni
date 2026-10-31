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
    label: "Build your presence",
    title: "Look established from the first click",
    description:
      "A website and brand that explain what you do clearly and give people a reason to trust you.",
  },
  AUDIENCE: {
    label: "Attract your audience",
    title: "Get found by the people who need you",
    description:
      "Search, advertising and social activity focused on reaching the right customers, not just more of them.",
  },
  JOURNEY: {
    label: "Improve the customer journey",
    title: "Turn interest into enquiries and sales",
    description:
      "Content, ecommerce and conversion improvements that make it easier for customers to take the next step.",
  },
};

export const services: ServiceContent[] = [
  {
    slug: "web-design-development",
    title: "Website design and development",
    summary: "Fast, responsive websites built to explain your business and generate enquiries.",
    headline: "A website that works as hard as you do.",
    intro:
      "We design and build responsive websites that present your business clearly, load quickly and guide visitors towards getting in touch.",
    need:
      "Your website is often the first conversation a customer has with you. If it is slow, dated or hard to use on a phone, people leave before they ever find out what you offer.",
    inclusions: [
      "Discovery session and sitemap planning",
      "Responsive design for desktop, tablet and mobile",
      "WordPress or custom development, recommended per project",
      "Contact and enquiry forms with spam protection",
      "On-page SEO foundations and analytics setup",
      "Hosting, care and maintenance plans available",
    ],
    process: [
      "Understand your goals, audience and existing content",
      "Shape the structure and visual direction for approval",
      "Deliver the build with staged previews and testing",
      "Refine after launch using real visitor behaviour",
    ],
    exclusions: [
      "Copywriting and photography are quoted separately unless agreed",
      "Third-party licences, plugins and domain costs are passed on at cost",
    ],
    theme: "PRESENCE",
    icon: "code",
    order: 1,
    faqs: [
      {
        question: "Do you build in WordPress?",
        answer:
          "Yes. We recommend the platform that suits each project — WordPress where you want familiar self-editing, or a custom build where performance and design flexibility matter most.",
      },
      {
        question: "Can I update the website myself?",
        answer:
          "Yes. Every site includes an editing area for approved text and images, along with simple instructions.",
      },
    ],
  },
  {
    slug: "branding-graphic-design",
    title: "Branding and graphic design",
    summary: "Logos, brand identities and print design that make your business recognisable.",
    headline: "A brand people remember for the right reasons.",
    intro:
      "From a first logo to a full identity refresh, we create consistent visual brands that work across your website, social channels and print.",
    need:
      "Inconsistent logos, colours and messaging make a business look smaller than it is. A clear identity builds recognition and trust over time.",
    inclusions: [
      "Brand strategy and positioning workshop",
      "Logo design and usage guidelines",
      "Colour palette and typography selection",
      "Brochures, presentations and print design",
      "Social media and stationery templates",
    ],
    process: [
      "Understand your market, competitors and personality",
      "Shape initial creative routes for feedback",
      "Deliver final artwork in every format you need",
      "Refine templates as your business grows",
    ],
    exclusions: [
      "Trademark searches and registration",
      "Print production costs, unless included in the quote",
    ],
    theme: "PRESENCE",
    icon: "palette",
    order: 2,
    faqs: [
      {
        question: "Will I own my logo?",
        answer:
          "Yes. On final payment you receive the artwork files and the rights agreed in your contract.",
      },
    ],
  },
  {
    slug: "content-creation",
    title: "Content creation",
    summary: "Copy, photography, video and email content that tells your story well.",
    headline: "Content that gives people a reason to choose you.",
    intro:
      "We plan and produce written, visual and video content for your website, social channels and email marketing.",
    need:
      "Good marketing needs a steady supply of useful, on-brand content — something most busy businesses struggle to produce consistently.",
    inclusions: [
      "Website and landing page copywriting",
      "Photography and short-form video",
      "Blog articles and guides",
      "Email marketing campaigns and newsletters",
      "Content calendars aligned with your goals",
    ],
    process: [
      "Understand your audience and what they ask",
      "Shape a content plan and tone of voice",
      "Deliver content on an agreed schedule",
      "Refine based on engagement and results",
    ],
    exclusions: ["Location, talent and travel costs for shoots are quoted separately"],
    theme: "JOURNEY",
    icon: "camera",
    order: 3,
    faqs: [
      {
        question: "Can you write in our voice?",
        answer:
          "Yes. We start by agreeing a tone of voice with you, and every piece is reviewed by you before it is published.",
      },
    ],
  },
  {
    slug: "seo",
    title: "Search engine optimisation (SEO)",
    summary: "Technical, on-page and local SEO to help customers find you in search.",
    headline: "Be visible when customers are searching.",
    intro:
      "We improve the technical health, content and local presence of your website so it can rank for the searches that matter to your business.",
    need:
      "Most buying journeys start with a search. If you are not visible for the terms your customers use, competitors win that business by default.",
    inclusions: [
      "Technical SEO audit and fixes",
      "Keyword and competitor research",
      "On-page optimisation and content recommendations",
      "Google Business Profile and local SEO",
      "Monthly reporting in plain English",
    ],
    process: [
      "Understand where you rank today and why",
      "Shape a prioritised plan of improvements",
      "Deliver changes month by month",
      "Refine based on rankings, traffic and enquiries",
    ],
    exclusions: ["We do not guarantee specific rankings — no honest agency can"],
    theme: "AUDIENCE",
    icon: "search",
    order: 4,
    faqs: [
      {
        question: "How long does SEO take?",
        answer:
          "Technical fixes can help within weeks, but meaningful organic growth usually builds over several months. We report progress monthly so you can see what is changing.",
      },
    ],
  },
  {
    slug: "paid-advertising",
    title: "Paid advertising",
    summary: "Google Ads and social advertising managed against clear, measurable goals.",
    headline: "Advertising that is measured by results, not clicks.",
    intro:
      "We plan, build and manage Google Ads and paid social campaigns, with tracking in place so you can see what your budget achieves.",
    need:
      "Paid advertising can bring customers quickly, but poorly targeted campaigns waste money fast. Careful setup and ongoing management make the difference.",
    inclusions: [
      "Google Search, Performance Max and display campaigns",
      "Meta, LinkedIn and other social advertising",
      "Conversion tracking and analytics setup",
      "Landing page and conversion recommendations",
      "Regular optimisation and reporting",
    ],
    process: [
      "Understand your margins, goals and audience",
      "Shape campaign structure, targeting and creative",
      "Deliver campaigns with tracking in place",
      "Refine budgets and messaging based on data",
    ],
    exclusions: ["Advertising spend is paid directly to the platform and is separate from our fee"],
    theme: "AUDIENCE",
    icon: "megaphone",
    order: 5,
    faqs: [
      {
        question: "What budget do I need?",
        answer:
          "It depends on your market and goals. We will recommend a realistic starting budget during our first conversation.",
      },
    ],
  },
  {
    slug: "social-media-management",
    title: "Social media management",
    summary: "Consistent, on-brand social content and community management.",
    headline: "Show up consistently where your customers spend their time.",
    intro:
      "We plan, create and publish social media content, and help you respond to your community, so your channels stay active and on-brand.",
    need:
      "Inactive or inconsistent social profiles can make a business look closed. Staying visible takes time most owners simply do not have.",
    inclusions: [
      "Channel strategy and content calendar",
      "Post design, captions and scheduling",
      "Community monitoring and engagement",
      "Monthly performance summary",
      "Optional paid social support",
    ],
    process: [
      "Understand your audience and current channels",
      "Shape a content plan and posting rhythm",
      "Deliver and publish content for your approval",
      "Refine based on what your audience responds to",
    ],
    exclusions: ["Package scope and pricing are confirmed per client"],
    theme: "AUDIENCE",
    icon: "users",
    order: 6,
    faqs: [
      {
        question: "Do I approve posts before they go live?",
        answer: "Yes. Content is shared for approval before it is scheduled.",
      },
    ],
  },
  {
    slug: "ecommerce-marketplaces",
    title: "Ecommerce and marketplace support",
    summary: "Online shops and marketplace listings set up to sell.",
    headline: "Make it easy for customers to buy.",
    intro:
      "We build and improve online shops and help you sell through marketplaces, with a focus on clear products, smooth checkout and reliable operations.",
    need:
      "Every unnecessary step between interest and checkout costs sales. A well-structured shop and clear listings remove that friction.",
    inclusions: [
      "WooCommerce and Shopify store builds",
      "Product page and checkout optimisation",
      "Marketplace listing setup and improvements",
      "Payment, shipping and integration setup",
      "Analytics and conversion reporting",
    ],
    process: [
      "Understand your products, margins and customers",
      "Shape the store structure and buying journey",
      "Deliver the store with payments and shipping tested",
      "Refine using sales and behaviour data",
    ],
    exclusions: ["Platform subscriptions, apps and transaction fees are paid by the client"],
    theme: "JOURNEY",
    icon: "cart",
    order: 7,
    faqs: [
      {
        question: "Which ecommerce platform should I use?",
        answer:
          "It depends on your product range, budget and how you want to manage orders. We will talk through the options and recommend one.",
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
