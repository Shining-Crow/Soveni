import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie policy",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie policy" updated="[date to be confirmed]">
      <h2>Our use of cookies</h2>
      <p>
        This website currently uses only strictly necessary cookies and storage required for it to
        function securely. We do not use advertising or analytics cookies.
      </p>
      <p>
        If we introduce analytics in future, we will ask for your consent before setting any
        non-essential cookies, and update this page.
      </p>
      <h2>Managing cookies</h2>
      <p>You can control and delete cookies through your browser settings.</p>
    </LegalPage>
  );
}
