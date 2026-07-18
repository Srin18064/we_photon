import type { Metadata } from "next";
import PolicyPage from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Payments, Cancellations & Refunds",
  description:
    "Wephoton's payment terms, project cancellation rules, and refund policy for software development and Dawingo SaaS subscriptions.",
};

export default function PaymentsRefundsPolicy() {
  return (
    <PolicyPage
      eyebrow="Policies"
      title="Payments, Cancellations & Refunds"
      updated="6 July 2026"
    >
      <section>
        <h2>1. Payment Terms</h2>
        <p>
          All prices listed on this website are starting prices in Indian Rupees
          (INR) and are exclusive of applicable GST. Final pricing is confirmed
          in a written quotation or agreement before work begins.
        </p>
        <ul>
          <li>
            <strong>Custom development projects</strong> (websites, mobile
            applications, e-commerce platforms) require an advance payment of
            50% of the agreed project value before work starts. The remaining
            balance is due on delivery, before the final handover of source
            code, credentials, or deployment.
          </li>
          <li>
            <strong>Milestone-based projects</strong>{" "}
            follow the payment
            schedule defined in the project agreement. Work on a milestone
            begins after the previous milestone&apos;s invoice is settled.
          </li>
          <li>
            <strong>Dawingo SaaS subscriptions</strong> are billed in advance
            for the chosen billing cycle (monthly or annual). Access is
            activated on receipt of payment.
          </li>
          <li>
            Payments are accepted through the methods stated on the invoice
            (bank transfer, UPI, or supported payment gateways). Third-party
            costs such as domains, hosting, app store fees, SMS/email gateways,
            and paid licences are billed at actuals unless the agreement states
            otherwise.
          </li>
          <li>
            Invoices unpaid for more than 14 days after the due date may lead
            to suspension of work or services until payment is received.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Cancellation Policy</h2>
        <ul>
          <li>
            <strong>Before work begins:</strong> you may cancel a project in
            writing within 7 days of payment and before any work has started.
            The advance is refunded after deducting payment gateway charges and
            any costs already incurred (such as licences or third-party
            purchases made on your behalf).
          </li>
          <li>
            <strong>After work begins:</strong> cancellation requests are
            accepted in writing at any time, but charges apply for all work
            completed up to the date of cancellation, calculated against the
            project milestones or on a pro-rata basis. Any balance from the
            advance after these deductions is refunded.
          </li>
          <li>
            <strong>SaaS subscriptions:</strong> you may cancel a Dawingo
            subscription at any time from your account or by writing to{" "}
            <a href="mailto:support@wephoton.in">support@wephoton.in</a>.
            Cancellation stops the next renewal; service remains active until
            the end of the paid billing period.
          </li>
          <li>
            Projects inactive for more than 60 days due to pending client
            inputs (content, approvals, or payments) may be treated as
            cancelled, and the work-completed charges above will apply.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Refund Policy</h2>
        <ul>
          <li>
            Refunds, where due under this policy, are processed to the original
            payment method within 7–14 business days of approval.
          </li>
          <li>
            No refunds are payable for work already delivered and approved, for
            milestones you have signed off, or for completed SaaS billing
            periods.
          </li>
          <li>
            If Wephoton is unable to deliver the agreed scope and the project
            is terminated by us, you receive a refund for the undelivered
            portion of the paid amount.
          </li>
          <li>
            Third-party costs (domains, hosting, licences, app store fees,
            gateway charges) are non-refundable once purchased.
          </li>
          <li>
            Change of mind, change in business plans, or delays caused by
            pending client inputs do not qualify for refunds of work already
            performed.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Chargebacks & Disputes</h2>
        <p>
          If you believe a charge is incorrect, contact us first at{" "}
          <a href="mailto:support@wephoton.in">support@wephoton.in</a> · most
          billing issues are resolved within a few business days. Raising a
          chargeback without contacting us may lead to suspension of services
          while the dispute is investigated.
        </p>
      </section>

      <section>
        <h2>5. Contact</h2>
        <p>
          For any questions about payments, cancellations, or refunds, write to{" "}
          <a href="mailto:support@wephoton.in">support@wephoton.in</a> or call{" "}
          <a href="tel:+918939129202">+91 89391 29202</a>.
        </p>
      </section>
    </PolicyPage>
  );
}
