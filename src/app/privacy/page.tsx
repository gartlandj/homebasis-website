import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <section className="py-16 sm:py-20 bg-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-2">
          Privacy Policy
        </h1>
        <p className="text-text-muted mb-10">Last updated: March 30, 2026</p>

        <div className="prose">
          <p>
            HomeBasis (&quot;we,&quot; &quot;our,&quot; or &quot;the App&quot;) is
            committed to protecting your privacy. This Privacy Policy explains
            how the HomeBasis mobile application handles your information.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Data You Provide</h3>
          <p>
            When you use HomeBasis, you may enter information about your home,
            including purchase price, closing costs, home improvement details,
            project costs, receipts, and related notes. This data is created and
            controlled entirely by you.
          </p>

          <h3>1.2 Data Stored on Your Device</h3>
          <p>
            All home improvement data, receipts, photos, and calculations are
            stored locally on your device. We do not transmit this data to our
            servers. Your information remains on your device unless you
            explicitly choose to use iCloud backup and sync (see Section 2).
          </p>

          <h3>1.3 Anonymous Crash Reports</h3>
          <p>
            We may collect anonymous crash reports and basic diagnostic
            information to help us improve app stability. These reports do not
            contain any personally identifiable information, home data, financial
            details, or receipt images. Crash reports may include device type,
            operating system version, app version, and a technical trace of the
            error.
          </p>

          <h2>2. iCloud Backup and Sync</h2>
          <p>
            If you have iCloud enabled on your device, HomeBasis may use iCloud
            to back up and sync your data across your Apple devices. This data is
            stored in your personal iCloud account and is governed by{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light underline"
            >
              Apple&apos;s Privacy Policy
            </a>
            . We do not have access to your iCloud data. You can disable iCloud
            sync for HomeBasis at any time through your device&apos;s Settings
            app.
          </p>

          <h2>3. Data We Do Not Collect</h2>
          <p>We want to be clear about what we do not do:</p>
          <ul>
            <li>
              We do <strong>not</strong> collect your name, email address, or
              contact information through the App.
            </li>
            <li>
              We do <strong>not</strong> track your location.
            </li>
            <li>
              We do <strong>not</strong> use third-party analytics or tracking
              tools.
            </li>
            <li>
              We do <strong>not</strong> serve advertisements.
            </li>
            <li>
              We do <strong>not</strong> create user profiles or track your
              behavior across apps or websites.
            </li>
          </ul>

          <h2>4. Data Sharing and Selling</h2>
          <p>
            We do <strong>not</strong> sell, rent, lease, or trade your personal
            data or home improvement information to any third party. We do not
            share your data with advertisers, data brokers, or any other
            external parties. Because your data is stored locally on your device
            (and optionally in your personal iCloud account), we simply do not
            have access to it.
          </p>

          <h2>5. Data Security</h2>
          <p>
            Your data is protected by your device&apos;s built-in security
            features, including device passcode, Face ID, or Touch ID. If you
            use iCloud sync, your data is encrypted in transit and at rest by
            Apple. We recommend keeping your device software up to date and using
            a strong passcode to protect your information.
          </p>

          <h2>6. Data Retention and Deletion</h2>
          <p>
            Your data remains on your device for as long as you choose to keep
            it. You can delete individual records within the App at any time.
            Uninstalling HomeBasis will remove all locally stored data from your
            device. To remove data from iCloud, you can manage your iCloud
            storage through your device&apos;s Settings app.
          </p>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            HomeBasis is not directed at children under the age of 13. We do not
            knowingly collect information from children. The App is designed for
            adult homeowners managing their property records and tax information.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            HomeBasis is distributed through the Apple App Store. Your download
            and use of the App Store is governed by Apple&apos;s terms and
            privacy policy. Other than Apple&apos;s platform services (including
            optional iCloud integration and crash reporting through Apple&apos;s
            frameworks), HomeBasis does not integrate with any third-party
            services.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we will notify you through an in-app notification
            or by updating the &quot;Last updated&quot; date at the top of this
            page. We encourage you to review this policy periodically.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our
            data practices, please contact us at:
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
