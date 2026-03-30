import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfService() {
  return (
    <section className="py-16 sm:py-20 bg-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-2">
          Terms of Service
        </h1>
        <p className="text-text-muted mb-10">Last updated: March 30, 2026</p>

        <div className="prose">
          <p>
            Please read these Terms of Service (&quot;Terms&quot;) carefully
            before using the HomeBasis mobile application (&quot;the App&quot;).
            By downloading, installing, or using HomeBasis, you agree to be
            bound by these Terms. If you do not agree to these Terms, do not use
            the App.
          </p>

          <h2>1. Description of Service</h2>
          <p>
            HomeBasis is a personal record-keeping and educational tool designed
            to help homeowners track home improvements, store receipts, and
            estimate the potential tax implications of their home&apos;s cost
            basis. The App provides general information and calculations based on
            publicly available IRS guidelines.
          </p>

          <h2>2. Not Tax, Legal, or Financial Advice</h2>
          <p>
            <strong>
              HomeBasis is not a substitute for professional tax, legal, or
              financial advice.
            </strong>{" "}
            The information, calculations, classifications, and estimates
            provided by the App are for informational and educational purposes
            only. Specifically:
          </p>
          <ul>
            <li>
              The App&apos;s classification of projects as &quot;capital
              improvements&quot; or &quot;repairs&quot; is based on general IRS
              guidelines and may not reflect your specific tax situation.
            </li>
            <li>
              Tax calculations, including capital gains estimates and Section 121
              exclusion projections, are approximations and should not be relied
              upon for tax filing purposes.
            </li>
            <li>
              Tax laws and IRS interpretations change frequently. The App may not
              reflect the most current regulations at all times.
            </li>
            <li>
              You are solely responsible for verifying all information,
              calculations, and classifications with a qualified tax
              professional, certified public accountant (CPA), or tax attorney
              before making any financial decisions or filing tax returns.
            </li>
          </ul>

          <h2>3. No Warranty on Calculations</h2>
          <p>
            The App&apos;s calculations, estimates, and project classifications
            are provided on an &quot;as is&quot; and &quot;as available&quot;
            basis without any warranties of any kind, either express or implied.
            We do not warrant that:
          </p>
          <ul>
            <li>
              Any calculation or estimate produced by the App is accurate,
              complete, or current.
            </li>
            <li>
              The App&apos;s classification of a project as a capital
              improvement or repair will match an IRS determination.
            </li>
            <li>
              The App&apos;s tax projections will match your actual tax
              liability.
            </li>
            <li>
              The App will be free of errors, bugs, or interruptions.
            </li>
          </ul>

          <h2>4. User Responsibilities</h2>
          <p>By using HomeBasis, you agree that:</p>
          <ul>
            <li>
              You will enter accurate and complete information to the best of
              your ability.
            </li>
            <li>
              You are responsible for maintaining backups of your data. While the
              App may support iCloud backup, we are not responsible for data
              loss.
            </li>
            <li>
              You will consult a qualified tax professional before relying on any
              information or calculation provided by the App.
            </li>
            <li>
              You will not use the App for any unlawful purpose, including
              misrepresenting your tax basis to the IRS or any tax authority.
            </li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            The App, including its design, code, text, graphics, and other
            content, is owned by HomeBasis and is protected by copyright,
            trademark, and other intellectual property laws. You may not copy,
            modify, distribute, sell, or create derivative works based on the App
            without our prior written consent.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, HomeBasis and its
            developers, officers, employees, and agents shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages, including but not limited to:
          </p>
          <ul>
            <li>
              Loss of profits, revenue, data, or financial losses resulting from
              inaccurate calculations or classifications.
            </li>
            <li>
              Tax penalties, interest, or additional tax liability arising from
              reliance on the App&apos;s information.
            </li>
            <li>
              Any damages arising from the use or inability to use the App.
            </li>
          </ul>
          <p>
            In no event shall our total liability to you for all claims arising
            from or related to the use of the App exceed the amount you paid for
            the App in the twelve (12) months preceding the claim.
          </p>

          <h2>7. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless HomeBasis and its
            developers from any claims, damages, losses, or expenses (including
            reasonable attorney&apos;s fees) arising from your use of the App,
            your violation of these Terms, or your reliance on the App&apos;s
            calculations or classifications for tax filing or financial
            decisions.
          </p>

          <h2>8. Apple App Store Compliance</h2>
          <p>
            You acknowledge that these Terms are between you and HomeBasis, not
            with Apple Inc. (&quot;Apple&quot;). Apple is not responsible for the
            App or its content. Your use of the App must comply with the App
            Store Terms of Service. Apple has no obligation to provide
            maintenance or support for the App. In the event of any failure of
            the App to conform to an applicable warranty, you may notify Apple
            and Apple will refund the purchase price (if any) for the App. To
            the maximum extent permitted by applicable law, Apple has no other
            warranty obligation with respect to the App. Apple is not responsible
            for addressing any claims relating to the App, including product
            liability claims, consumer protection claims, or intellectual
            property infringement claims. Apple is a third-party beneficiary of
            these Terms and may enforce them against you.
          </p>

          <h2>9. Termination</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue the App at
            any time without notice. You may stop using the App at any time by
            uninstalling it from your device. Sections regarding limitation of
            liability, indemnification, and disclaimers shall survive
            termination.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. If we make material
            changes, we will notify you through an in-app notification or by
            updating the &quot;Last updated&quot; date at the top of this page.
            Your continued use of the App after changes are posted constitutes
            your acceptance of the revised Terms.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of the United States, without regard to conflict of law
            principles. Any disputes arising from these Terms or the use of the
            App shall be resolved in the courts of competent jurisdiction.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have questions about these Terms of Service, please contact us
            at:
          </p>
          <p>
            <a
              href="mailto:support@homebasis.app"
              className="text-primary hover:text-primary-light underline"
            >
              support@homebasis.app
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
