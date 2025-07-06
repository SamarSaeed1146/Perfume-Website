"use client";

import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 text-orange-400 drop-shadow-lg">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto">
            Understand your rights and responsibilities when using ScentEcho.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last Updated: July 1, 2025
          </p>
        </div>
      </section>

      {/* Policy Content Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto">
        <div className="space-y-10">
          {/* Introduction / Acceptance of Terms */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              1. Acceptance of Terms
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Welcome to ScentEcho. These Terms of Service (&#34;Terms&#34;)
              govern your access to and use of the ScentEcho website, located at{" "}
              <Link href="/" className="text-orange-400 hover:underline">
                www.scentecho.com
              </Link>{" "}
              (the &#34;Site&#34;), and any related services, content, or
              functionality offered by ScentEcho (collectively, the
              &#34;Services&#34;).
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              By accessing or using the Site or Services, you agree to be bound
              by these Terms and our Privacy Policy. If you do not agree to
              these Terms, you may not access or use the Site or Services.
            </p>
          </div>

          {/* Use of the Site */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              2. Use of the Site
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              You agree to use the Site and Services only for lawful purposes
              and in accordance with these Terms. You are prohibited from using
              the Site:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>
                In any way that violates any applicable federal, state, local,
                or international law or regulation.
              </li>
              <li>
                To transmit, or procure the sending of, any advertising or
                promotional material without our prior written consent.
              </li>
              <li>
                To impersonate or attempt to impersonate ScentEcho, a ScentEcho
                employee, another user, or any other person or entity.
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits
                anyone&#39;s use or enjoyment of the Site, or which, as
                determined by us, may harm ScentEcho or users of the Site.
              </li>
            </ul>
          </div>

          {/* User Accounts */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              3. User Accounts
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              To access certain features of the Site, you may be required to
              create an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>
                Provide accurate, current, and complete information during the
                registration process.
              </li>
              <li>
                Maintain the security of your password and identification.
              </li>
              <li>Promptly update your account information.</li>
              <li>
                Notify us immediately of any unauthorized use of your account.
              </li>
            </ul>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              ScentEcho reserves the right to suspend or terminate your account
              if any information provided during the registration process or
              thereafter proves to be inaccurate, false, or incomplete.
            </p>
          </div>

          {/* Intellectual Property Rights */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              4. Intellectual Property Rights
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              The Site and its entire contents, features, and functionality
              (including but not limited to all information, software, text,
              displays, images, video, and audio, and the design, selection, and
              arrangement thereof) are owned by ScentEcho, its licensors, or
              other providers of such material and are protected by copyright,
              trademark, patent, trade secret, and other intellectual property
              or proprietary rights laws.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works
              of, publicly display, publicly perform, republish, download,
              store, or transmit any of the material on our Site, except as
              generally permitted by these Terms.
            </p>
          </div>

          {/* Product Information and Availability */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              5. Product Information and Availability
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              We strive to ensure that all information on the Site, including
              product descriptions, pricing, and availability, is accurate.
              However, we do not warrant that product descriptions or other
              content of the Site is accurate, complete, reliable, current, or
              error-free.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              All products are subject to availability, and we reserve the right
              to limit the quantity of products we supply, or to refuse any
              order.
            </p>
          </div>

          {/* Disclaimers */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              6. Disclaimers
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              THE SITE AND SERVICES ARE PROVIDED ON AN &#34;AS IS&#34; AND
              &#34;AS AVAILABLE&#34; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED. SCENTECHO DOES NOT MAKE ANY WARRANTY OR
              REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY,
              RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SITE.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              7. Limitation of Liability
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              IN NO EVENT WILL SCENTECHO, ITS AFFILIATES, OR THEIR LICENSORS,
              SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE
              LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING
              OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE
              SITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE SITE OR SUCH
              OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
              INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
            </p>
          </div>

          {/* Indemnification */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              8. Indemnification
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              You agree to defend, indemnify, and hold harmless ScentEcho, its
              affiliates, licensors, and service providers, and its and their
              respective officers, directors, employees, contractors, agents,
              licensors, suppliers, successors, and assigns from and against any
              claims, liabilities, damages, judgments, awards, losses, costs,
              expenses, or fees (including reasonable attorneys&#39; fees)
              arising out of or relating to your violation of these Terms or
              your use of the Site.
            </p>
          </div>

          {/* Governing Law and Jurisdiction */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              9. Governing Law and Jurisdiction
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              All matters relating to the Site and these Terms, and any dispute
              or claim arising therefrom or related thereto (in each case,
              including non-contractual disputes or claims), shall be governed
              by and construed in accordance with the internal laws of [Your
              State/Country], without giving effect to any choice or conflict of
              law provision or rule.
            </p>
          </div>

          {/* Changes to the Terms of Service */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              10. Changes to the Terms of Service
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We may revise and update these Terms from time to time in our sole
              discretion. All changes are effective immediately when we post
              them and apply to all access to and use of the Site thereafter.
              Your continued use of the Site following the posting of revised
              Terms means that you accept and agree to the changes.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              11. Contact Information
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please
              contact us at:
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
