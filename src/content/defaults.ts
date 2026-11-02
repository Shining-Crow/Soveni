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
  { title: string; label: string; description: string; icon: string }
> = {
  PRESENCE: {
    label: "Build Presence",
    title: "Establish a professional digital identity.",
    description:
      "A website and brand that make you look established, explain what you do and give customers confidence to get in touch.",
    icon: "layers",
  },
  AUDIENCE: {
    label: "Attract Audience",
    title: "Reach the right people and grow your brand.",
    description:
      "Search, social and paid campaigns that put you in front of people who are already looking for what you offer.",
    icon: "users",
  },
  JOURNEY: {
    label: "Improve Journey",
    title: "Create seamless experiences that convert.",
    description:
      "Content and ecommerce that guide visitors from first click to enquiry or purchase, and keep them coming back.",
    icon: "trend",
  },
};

export const services: ServiceContent[] = [
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    summary: "High-performing websites that look great and deliver results.",
    headline: "Beautiful, fast and business-focused websites that turn visitors into customers.",
    intro:
      "Beautiful, fast and business-focused websites that turn visitors into customers.",
    need:
      "Your website is often the first conversation a customer has with you. If it is slow, dated or hard to use on a phone, people leave before they find out what you offer.",
    inclusions: [
      "UI/UX design and user experience",
      "Custom website development",
      "Responsive on mobile, tablet and desktop",
      "Performance and SEO optimisation",
      "Content management so your team can edit pages",
      "Testing and launch support",
    ],
    process: [
      "Understand your goals, customers and competitors",
      "Shape the sitemap, wireframes and visual design",
      "Deliver the build in stages with preview links",
      "Refine after launch using real visitor data",
    ],
    exclusions: [
      "Copywriting and photography are quoted separately unless agreed",
      "Third-party licences, plugins and domain costs are passed on at cost",
    ],
    theme: "PRESENCE",
    icon: "monitor",
    order: 1,
    faqs: [
      {
        question: "How long does a website take?",
        answer:
          "Most brochure websites take four to eight weeks from approved design to launch. Larger builds are planned in stages so you can launch sooner.",
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
    title: "Branding & Graphic Design",
    summary: "Distinctive brand identities and visual assets.",
    headline: "A brand people recognise, remember and trust.",
    intro:
      "Logos, visual identities and design assets that make your business look established and consistent everywhere it appears.",
    need:
      "Customers judge quality in seconds. An inconsistent or dated look makes a good business feel smaller than it is.",
    inclusions: [
      "Brand discovery and positioning",
      "Logo design and visual identity",
      "Colour palette, typography and brand guidelines",
      "Social media templates and marketing collateral",
      "Print design such as business cards and brochures",
    ],
    process: [
      "Understand your audience, values and competitors",
      "Shape creative routes for you to review",
      "Deliver the chosen identity and all master files",
      "Refine with guidelines and templates for your team",
    ],
    exclusions: ["Trademark registration is not included"],
    theme: "PRESENCE",
    icon: "layers",
    order: 2,
    faqs: [
      {
        question: "Can you refresh our existing brand rather than replace it?",
        answer:
          "Yes. Many clients need an evolution rather than a rebrand, keeping the recognition they have already built.",
      },
    ],
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    summary: "Engaging content that tells your story and drives action.",
    headline: "Content that tells your story and moves people to act.",
    intro:
      "Copy, graphics, photography direction and short-form video that explain what you do and give people a reason to choose you.",
    need:
      "Great design without clear, compelling content still leaves visitors unsure. The right words and visuals turn interest into action.",
    inclusions: [
      "Website and landing page copywriting",
      "Blog articles and SEO-led content",
      "Social graphics and short-form video",
      "Photography and video direction",
      "Content calendars and planning",
    ],
    process: [
      "Understand your voice, audience and goals",
      "Shape a content plan and key messages",
      "Deliver content for review on an agreed schedule",
      "Refine based on engagement and results",
    ],
    exclusions: ["Location shoots and stock licences are quoted separately"],
    theme: "JOURNEY",
    icon: "play",
    order: 3,
    faqs: [
      {
        question: "Will the content sound like us?",
        answer:
          "Yes. We start by learning how you talk to customers and agree a tone of voice before anything is written.",
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO (Search Engine Optimisation)",
    summary: "Improve visibility and attract high-intent traffic.",
    headline: "Be found by customers who are already searching.",
    intro:
      "Technical, on-page and local SEO that helps the right people find your business on Google and other search engines.",
    need:
      "If customers cannot find you in search results, they find your competitors instead. SEO compounds over time into a steady source of enquiries.",
    inclusions: [
      "SEO audit and keyword research",
      "Technical fixes and site speed improvements",
      "On-page optimisation and content recommendations",
      "Local SEO and Google Business Profile",
      "Monthly reporting in plain English",
    ],
    process: [
      "Understand where you rank today and why",
      "Shape a prioritised SEO roadmap",
      "Deliver technical and content improvements",
      "Refine monthly based on rankings and traffic",
    ],
    exclusions: ["We never guarantee specific rankings — no honest agency can"],
    theme: "AUDIENCE",
    icon: "search",
    order: 4,
    faqs: [
      {
        question: "How long until SEO shows results?",
        answer:
          "Technical fixes can help within weeks, but meaningful growth usually builds over three to six months.",
      },
    ],
  },
  {
    slug: "paid-advertising",
    title: "Paid Advertising",
    summary: "Targeted campaigns that deliver measurable results.",
    headline: "Targeted campaigns with results you can measure.",
    intro:
      "Google, Meta and LinkedIn campaigns planned around your goals, with clear tracking so you know exactly what your budget returns.",
    need:
      "Paid ads can bring customers in quickly, but without the right targeting and tracking budgets disappear with little to show for it.",
    inclusions: [
      "Campaign strategy and audience research",
      "Google Ads, Meta and LinkedIn campaigns",
      "Ad copy and creative",
      "Conversion tracking and landing page advice",
      "Ongoing optimisation and reporting",
    ],
    process: [
      "Understand your goals, margins and audience",
      "Shape campaigns, budgets and tracking",
      "Deliver and launch campaigns",
      "Refine continuously to improve return",
    ],
    exclusions: ["Ad spend is paid directly to the platforms and is separate from our fees"],
    theme: "AUDIENCE",
    icon: "megaphone",
    order: 5,
    faqs: [
      {
        question: "What budget do I need?",
        answer:
          "It depends on your market and goals. We recommend a starting budget during the proposal and scale it once results are proven.",
      },
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    summary: "Build, engage and grow your audience across key platforms.",
    headline: "Build, engage and grow your audience.",
    intro:
      "Planned, on-brand social media across the platforms your customers use, managed consistently so you stay visible without the daily effort.",
    need:
      "An inactive or inconsistent social presence makes a business look closed. Regular, relevant posts build trust long before someone gets in touch.",
    inclusions: [
      "Social strategy and platform selection",
      "Monthly content calendar",
      "Post design, captions and scheduling",
      "Community management",
      "Monthly performance reporting",
    ],
    process: [
      "Understand your audience and current channels",
      "Shape a content strategy and calendar",
      "Deliver posts and manage engagement",
      "Refine using monthly performance data",
    ],
    exclusions: ["Paid social promotion is covered under Paid Advertising"],
    theme: "AUDIENCE",
    icon: "share",
    order: 6,
    faqs: [
      {
        question: "Which platforms do you manage?",
        answer:
          "Typically Instagram, Facebook, LinkedIn and TikTok. We recommend the platforms that suit your audience rather than trying to be everywhere.",
      },
    ],
  },
  {
    slug: "ecommerce-marketplace",
    title: "Ecommerce & Marketplace Support",
    summary: "Launch, optimise and grow your online store or marketplace presence.",
    headline: "Launch, optimise and grow your online store.",
    intro:
      "Shopify and WooCommerce stores, plus Amazon and Etsy marketplace support, set up to make buying easy and keep sales growing.",
    need:
      "Every extra click or slow page in a checkout costs sales. A well-built store and well-managed listings make it easy for customers to buy.",
    inclusions: [
      "Shopify and WooCommerce store builds",
      "Product listings and catalogue setup",
      "Payments, shipping and tax configuration",
      "Amazon and Etsy marketplace support",
      "Conversion rate optimisation",
    ],
    process: [
      "Understand your products, customers and operations",
      "Shape the store structure and buying journey",
      "Deliver the store with testing and training",
      "Refine using sales and behaviour data",
    ],
    exclusions: ["Platform subscriptions and transaction fees are paid by the client"],
    theme: "JOURNEY",
    icon: "cart",
    order: 7,
    faqs: [
      {
        question: "Can you move my store to a new platform?",
        answer:
          "Yes. We plan migrations carefully to keep your products, customers, orders and search rankings intact.",
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
  /** Full profile URLs; empty values are not rendered. */
  socialX: "",
  socialInstagram: "",
  socialLinkedin: "",
};

export type SiteSettings = typeof siteSettings;
