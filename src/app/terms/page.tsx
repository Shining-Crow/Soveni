import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Website terms",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Website terms of use" updated="[date to be confirmed]">
      <h2>About these terms</h2>
      <p>
        These terms apply to your use of this website. Services we provide to clients are governed
        by a separate written agreement.
      </p>
      <h2>Content</h2>
      <p>
        Information on this website is provided for general guidance and may change without notice.
        Unless stated otherwise, the content and design are owned by Soveni.
      </p>
      <h2>Liability</h2>
      <p>[Liability wording to be confirmed following legal review.]</p>
      <h2>Governing law</h2>
      <p>[Jurisdiction to be confirmed — e.g. the laws of England and Wales.]</p>
    </LegalPage>
  );
}
