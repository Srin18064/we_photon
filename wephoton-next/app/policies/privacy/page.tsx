import type { Metadata } from "next";
import PolicyPage from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How WePhoton collects, uses, and protects your personal information across our website, services, and the Dawingo Multiverse.",
};

export default function PrivacyPolicy() {
  return (
    <PolicyPage eyebrow="Policies" title="Privacy Policy" updated="6 July 2026">
      <section>
        <h2>1. Who We Are</h2>
        <p>
          WePhoton (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a
          software development company operating from India, reachable at{" "}
          <a href="mailto:support@wephoton.in">support@wephoton.in</a>. This
          policy explains how we handle personal information collected through
          wephoton.in, our client engagements, and the Dawingo product family.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <ul>
          <li>
            <strong>Contact details</strong> you share when requesting a quote,
            demo, or support — name, email address, phone number, company name.
          </li>
          <li>
            <strong>Project information</strong> you provide during an
            engagement, such as requirements, content, and credentials needed
            to deliver the work.
          </li>
          <li>
            <strong>Usage data</strong> collected automatically when you browse
            our website or use Dawingo products — device type, browser, pages
            visited, and similar analytics signals.
          </li>
          <li>
            <strong>Billing information</strong> required to raise invoices and
            process payments. Card and banking details are handled by our
            payment providers; we do not store them.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use It</h2>
        <ul>
          <li>To respond to enquiries and deliver contracted services.</li>
          <li>To operate, secure, and improve our website and products.</li>
          <li>To send invoices, service notices, and renewal reminders.</li>
          <li>
            To share product updates you have opted into — you can unsubscribe
            at any time.
          </li>
          <li>To meet legal and tax obligations under Indian law.</li>
        </ul>
      </section>

      <section>
        <h2>4. Sharing</h2>
        <p>
          We do not sell personal information. We share it only with service
          providers who help us operate (hosting, payments, analytics, email),
          under confidentiality obligations, or when required by law.
        </p>
      </section>

      <section>
        <h2>5. Cookies</h2>
        <p>
          Our website uses cookies and similar technologies for essential
          functionality and anonymous analytics. You can control cookies
          through your browser settings; disabling them may affect parts of the
          site.
        </p>
      </section>

      <section>
        <h2>6. Data Security & Retention</h2>
        <p>
          We use industry-standard safeguards — encryption in transit, access
          controls, and least-privilege practices — to protect your data. We
          retain personal information only as long as needed for the purposes
          above or as required by law, then delete or anonymise it.
        </p>
      </section>

      <section>
        <h2>7. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your
          personal information, and withdraw consent for marketing, by writing
          to <a href="mailto:support@wephoton.in">support@wephoton.in</a>. We
          respond within a reasonable time and in line with applicable Indian
          data protection law.
        </p>
      </section>

      <section>
        <h2>8. Changes</h2>
        <p>
          We may update this policy from time to time. The &quot;Last
          updated&quot; date above reflects the current version; material
          changes will be highlighted on this page.
        </p>
      </section>
    </PolicyPage>
  );
}
