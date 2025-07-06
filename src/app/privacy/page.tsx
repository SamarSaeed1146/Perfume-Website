// app/privacy-policy/page.tsx or pages/privacy-policy.tsx
"use client";

import Link from "next/link";

export default function Privacy() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 text-orange-400 drop-shadow-lg">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto">
            Your privacy is our priority. Learn how we protect your information.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last Updated: July 1, 2025
          </p>
        </div>
      </section>

      {/* Policy Content Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto">
        <div className="space-y-10">
          {/* Introduction */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              1. Introduction
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Welcome to ScentEcho. We are committed to protecting your privacy
              and ensuring the security of your personal information. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website{" "}
              <Link href="/" className="text-orange-400 hover:underline">
                www.scentecho.com
              </Link>
              , including any other media form, media channel, mobile website,
              or mobile application related or connected thereto (collectively,
              the Site).
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              2. Information We Collect
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The
              information we may collect on the Site includes:
            </p>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              Personal Data
            </h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              Demographic and other personally identifiable information (such as
              your name and email address) that you voluntarily give to us when
              you register with the Site or when you choose to participate in
              various activities related to the Site, such as online chat and
              message boards.
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6 text-white">
              Derivative Data
            </h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              Information our servers automatically collect when you access the
              Site, such as your IP address, your browser type, your operating
              system, your access times, and the pages you have viewed directly
              before and after accessing the Site.
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6 text-white">
              Financial Data
            </h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              Financial information, such as data related to your payment method
              (e.g., valid credit card number, card brand, expiration date) that
              we may collect when you purchase, order, return, exchange, or
              request information about our services from the Site. We store
              only very limited, if any, financial information that we collect.
              Otherwise, all financial information is stored by our payment
              processor, [Payment Processor Name], and you are encouraged to
              review their privacy policy.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              3. How We Use Your Information
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Create and manage your account.</li>
              <li>Process your transactions and send related information.</li>
              <li>Email you regarding your account or order.</li>
              <li>Enable user-to-user communications.</li>
              <li>
                Generate a personal profile about you to make your visit to the
                Site more personalized.
              </li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>
                Monitor and analyze usage and trends to improve your experience
                with the Site.
              </li>
              <li>Notify you of updates to the Site.</li>
              <li>
                Offer new products, services, and/or recommendations to you.
              </li>
              <li>Perform other business activities as needed.</li>
            </ul>
          </div>

          {/* Disclosure of Your Information */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              4. Disclosure of Your Information
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:
            </p>
            <h3 className="text-2xl font-semibold mb-3 text-white">
              By Law or to Protect Rights
            </h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              If we believe the release of information about you is necessary to
              respond to legal process, to investigate or remedy potential
              violations of our policies, or to protect the rights, property, or
              safety of others, we may share your information as permitted or
              required by any applicable law, rule, or regulation.
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6 text-white">
              Third-Party Service Providers
            </h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              We may share your information with third parties that perform
              services for us or on our behalf, including payment processing,
              data analysis, email delivery, hosting services, customer service,
              and marketing assistance.
            </p>
            <h3 className="text-2xl font-semibold mb-3 mt-6 text-white">
              Marketing Communications
            </h3>
            <p className="text-gray-300 leading-relaxed mb-2">
              With your consent, or with an opportunity for you to withdraw
              consent, we may share your information with third parties for
              marketing purposes, as permitted by law.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              5. Your Rights
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              You have certain rights regarding your personal information,
              subject to local law. These include the rights to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Access your personal information.</li>
              <li>Request correction of your personal information.</li>
              <li>Request erasure of your personal information.</li>
              <li>Object to processing of your personal information.</li>
              <li>
                Request restriction of processing your personal information.
              </li>
              <li>Request transfer of your personal information.</li>
              <li>Withdraw consent (where applicable).</li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              To exercise any of these rights, please contact us using the
              details provided in the Contact Us section below.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              6. Data Security
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </p>
          </div>

          {/* Cookies and Tracking Technologies */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              7. Cookies and Other Tracking Technologies
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We may use cookies, web beacons, tracking pixels, and other
              tracking technologies on the Site to help customize the Site and
              enhance your experience. When you access the Site, your personal
              information is not collected through the use of tracking
              technology. Most browsers are set to accept cookies by default.
              You can remove or reject cookies, but be aware that such action
              could affect the availability and functionality of the Site.
            </p>
          </div>

          {/* Third-Party Websites */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              8. Third-Party Websites
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The Site may contain links to third-party websites and
              applications of interest, including advertisements and external
              services, that are not affiliated with us. Once you have used
              these links to leave the Site, any information you provide to
              these third parties is not covered by this Privacy Policy, and we
              cannot guarantee the safety and privacy of your information.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              9. Children&#39;s Privacy
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We do not knowingly collect personally identifiable information
              from children under the age of 13. If you are a parent or guardian
              and you learn that your Child has provided us with Personal
              Information, please contact us. If we become aware that we have
              collected Personal Information from a child under the age of 13
              without verification of parental consent, we take steps to remove
              that information from our servers.
            </p>
          </div>

          {/* Changes to This Privacy Policy */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal, or regulatory reasons. We will notify you of
              any changes by posting the new Privacy Policy on this page and
              updating the Last Updated&#34; date at the top of this Privacy
              Policy. You are advised to review this Privacy Policy periodically
              for any changes.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              11. Contact Us
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Email:{" "}
              <Link href="/contact" className="text-orange-400 hover:underline">
                support@scentecho.com
              </Link>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Address: 123 Scent Avenue, Fragrance City, FC 12345
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              You can also use our dedicated{" "}
              <Link
                href="/contact"
                className="text-orange-400 hover:underline font-semibold"
              >
                Contact Page
              </Link>{" "}
              for direct inquiries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
