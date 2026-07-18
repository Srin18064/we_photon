import type { Metadata } from "next";
import Link from "next/link";
import PolicyPage from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing use of wephoton.in, Wephoton development services, and Dawingo SaaS products.",
};

export default function TermsAndConditions() {
  return (
    <PolicyPage eyebrow="Policies" title="Terms & Conditions" updated="6 July 2026">
      <section>
        <h2>1. Agreement</h2>
        <p>
          By using wephoton.in, engaging Wephoton for development services, or
          subscribing to a Dawingo product, you agree to these terms. Where a
          signed project agreement or subscription contract exists, that
          document prevails over these general terms in case of conflict.
        </p>
      </section>

      <section>
        <h2>2. Services</h2>
        <p>
          Wephoton provides custom software development, mobile application
          development, e-commerce platform engineering, and proprietary SaaS
          products under the Dawingo brand. Scope, timelines, and deliverables
          for each engagement are defined in a written quotation or agreement.
        </p>
      </section>

      <section>
        <h2>3. Client Responsibilities</h2>
        <ul>
          <li>
            Provide content, feedback, approvals, and access needed for the
            project within agreed timelines.
          </li>
          <li>
            Ensure that materials you supply (text, images, data, trademarks)
            do not infringe third-party rights.
          </li>
          <li>
            Keep account credentials confidential and notify us of any
            unauthorised use.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Payments</h2>
        <p>
          Payment schedules, cancellations, and refunds are governed by our{" "}
          <Link href="/policies/payments-refunds">
            Payments, Cancellations &amp; Refunds Policy
          </Link>
          . Deliverables, source code, and deployments are handed over after
          full settlement of dues.
        </p>
      </section>

      <section>
        <h2>5. Intellectual Property</h2>
        <ul>
          <li>
            On full payment, you own the custom deliverables produced for your
            project, excluding our pre-existing tools, frameworks, and
            libraries, which are licensed to you for use within the
            deliverables.
          </li>
          <li>
            Dawingo products, including their code, design, and branding,
            remain the exclusive property of Wephoton. Subscriptions grant a
            non-transferable right to use the service, not ownership.
          </li>
          <li>
            Wephoton may reference completed non-confidential work in its
            portfolio unless agreed otherwise in writing.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Warranties & Support</h2>
        <p>
          We correct defects in delivered work reported within 30 days of
          handover at no charge, provided the deliverable has not been modified
          by others. Ongoing maintenance, feature changes, and support beyond
          this window are available under separate support plans.
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Wephoton&apos;s total
          liability for any claim arising from a service or product is limited
          to the amount you paid for that service or product in the preceding
          six months. We are not liable for indirect or consequential losses,
          including lost profits or data, except where caused by our wilful
          misconduct.
        </p>
      </section>

      <section>
        <h2>8. Acceptable Use</h2>
        <p>
          You may not use our services or products for unlawful activity, to
          distribute malware, to infringe others&apos; rights, or to attempt
          unauthorised access to our systems. We may suspend accounts that
          violate this section.
        </p>
      </section>

      <section>
        <h2>9. Governing Law</h2>
        <p>
          These terms are governed by the laws of India. Disputes are subject
          to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.
        </p>
      </section>

      <section>
        <h2>10. Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href="mailto:support@wephoton.in">support@wephoton.in</a> ·{" "}
          <a href="tel:+918939129202">+91 89391 29202</a>.
        </p>
      </section>
    </PolicyPage>
  );
}
