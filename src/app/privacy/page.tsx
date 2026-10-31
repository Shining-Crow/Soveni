import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy notice",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy notice" updated="[date to be confirmed]">
      <h2>Who we are</h2>
      <p>
        Soveni ("we", "us") is the controller of personal data collected through this website.
        [Registered company name, number and address to be confirmed.]
      </p>
      <h2>What we collect</h2>
      <p>When you submit our enquiry form we collect:</p>
      <ul>
        <li>your name, email address and business name;</li>
        <li>optionally, your website, phone number, budget and timing;</li>
        <li>the details you provide about your project;</li>
        <li>a one-way hash of your IP address, used only to prevent spam.</li>
      </ul>
      <h2>Why we use it</h2>
      <p>
        We use these details to respond to your enquiry and, if you wish, to prepare a proposal.
        Our lawful basis is taking steps at your request before entering into a contract, and our
        legitimate interest in protecting the form from abuse.
      </p>
      <h2>How long we keep it</h2>
      <p>[Retention period to be confirmed.] Enquiries that do not lead to a project are deleted after this period.</p>
      <h2>Who we share it with</h2>
      <p>
        Our hosting and database providers process data on our behalf. We do not sell your data.
        [Processor list to be confirmed.]
      </p>
      <h2>Your rights</h2>
      <p>
        You can ask to access, correct or delete your personal data, or object to how we use it. You
        also have the right to complain to the Information Commissioner's Office (ico.org.uk).
      </p>
    </LegalPage>
  );
}
