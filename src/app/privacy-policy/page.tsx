"use client";

import Banner from "@/components/global/banner";
import Link from "next/link";
import React from "react";

export default function PrivacyPolicy() {


  

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
      <Banner
             title={"Privacy Policy"}
     para={"At Vincit Edupath, we value your privacy and are committed to protecting the personal information shared by students, parents, and website visitors. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our services."}
             slug={"privacy-policy"}
           />

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="">
          
         

          {/* Privacy Policy Documents */}
          <main className=" bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 prose max-w-none">
            <p className="text-gray-500 text-sm mb-8">
              This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our services.
            </p>

            <hr className="border-gray-100 my-6" />

            {/* Section 1 */}
            <section id="info-collect" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4 text-gray-600">While using our website or services, we may collect the following details:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Full name, Email address</li>
                    <li>Phone number</li>
                    <li>City or address details</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Academic Information</h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Educational qualifications</li>
                    <li>Preferred course or country</li>
                    <li>Career interests and study plans</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>IP address</li>
                    <li>Browser and device details</li>
                    <li>Website usage via cookies & analytics</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2">Communication Info</h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Details from contact forms</li>
                    <li>Emails, calls, or inquiries</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="how-use" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none pl-0">
                {[
                  "To provide MBBS abroad counseling and admission support",
                  "To respond to student and parent inquiries",
                  "To improve website performance and user experience",
                  "To share important updates or promotional info",
                  "To maintain security and prevent fraud",
                  "To fulfill legal and administrative requirements"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-blue-500 mt-1">✔</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section id="cookies" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookies & Website Tracking</h2>
              <p className="text-gray-600 mb-4">
                Our website may use cookies and related technologies to improve user experience and website functionality. Cookies help us:
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 mb-4">
                <li>Understand visitor preferences</li>
                <li>Improve website content and performance</li>
                <li>Analyze website traffic and engagement</li>
                <li>Provide relevant advertisements and updates</li>
              </ul>
              <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 text-sm text-gray-700 rounded-r-xl">
                Users can control cookie settings through their individual browser preferences.
              </blockquote>
            </section>

            {/* Section 4 */}
            <section id="sharing" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing of Information</h2>
              <p className="text-gray-600 mb-4">Vincit Edupath does not sell or rent personal information to third parties. However, information may be shared under:</p>
              
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="font-semibold text-gray-900">University & Educational Partners</h3>
                  <p className="text-sm text-gray-600">To support and facilitate official admission and counseling procedures.</p>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <h3 className="font-semibold text-gray-900">Service Providers</h3>
                  <p className="text-sm text-gray-600">With trusted partners helping us manage website operations and student services.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Legal Requirements</h3>
                  <p className="text-sm text-gray-600">If required by law, regulation, or to protect our legal rights and website security.</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="security" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Protection & Security</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use appropriate security measures to keep personal information safe from unauthorized access, misuse, or disclosure. While we strive to maintain strong security practices, no online platform can guarantee 100% complete protection.
              </p>
            </section>

            {/* Section 6 */}
            <section id="third-party" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Websites</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our website may contain links to external websites or platforms. Vincit Edupath is not responsible for the privacy practices or content of third-party websites. Users are advised to review their policies separately.
              </p>
            </section>

            {/* Section 7 */}
            <section id="user-rights" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. User Rights & Choices</h2>
              <p className="text-gray-600 mb-4">Depending on applicable laws, users may have the right to:</p>
              <div className="flex flex-wrap gap-2">
                {["Access Info", "Update Details", "Request Deletion", "Opt-out of Promo", "Restrict Processing"].map((item, idx) => (
                  <span key={idx} className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                For any privacy-related requests, users may contact us through the details available on our Contact Us page.
              </p>
            </section>

            {/* Section 8 */}
            <section id="children" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children’s Privacy</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our services are intended for students and users above the age of 18. We do not knowingly collect information from minors without appropriate consent. If such information is identified, necessary action will be taken to remove it.
              </p>
            </section>

            {/* Section 9 */}
            <section id="updates" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Updates To This Privacy Policy</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Vincit Edupath may revise or update this Privacy Policy from time to time. Any changes will be updated on this page, and continued use of the website will indicate acceptance of the revised policy.
              </p>
            </section>

            {/* Section 10 */}
            <section id="contact" className="scroll-mt-6 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">10. Contact Information</h2>
              <p className="text-gray-600 text-sm mb-4">
                For questions, concerns, or requests related to this Privacy Policy, users can contact Vincit Edupath through the details provided on our official page.
              </p>
              <Link 
                href="/contact-us" 
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm"
              >
                Go to Contact Us
              </Link>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}