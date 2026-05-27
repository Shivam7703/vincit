"use client";

import Banner from "@/components/global/banner";
import React from "react";

export default function TermsConditions() {
 

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 antialiased selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
        <Banner
                   title={"Terms & Conditions"}
           para={"Welcome to Vincit Edupath. By accessing or using our website and services, you agree to follow the Terms & Conditions mentioned below."}
                   slug={"terms-conditions"}
                 />

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="">
          
          {/* Sidebar Navigation */}


          {/* Terms & Conditions Documents */}
          <main className=" bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100 prose max-w-none">
            <p className="text-gray-500 text-sm mb-8">
              If you do not agree with these terms, please avoid using our website or services.
            </p>

            <hr className="border-gray-100 my-6" />

            {/* Section 1 */}
            <section id="intro" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                These Terms &amp; Conditions govern the use of the Vincit Edupath website and services related to MBBS abroad counseling, admissions, and educational guidance. By visiting our website, users agree to comply with all applicable terms and policies.
              </p>
            </section>

            {/* Section 2 */}
            <section id="services" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
              <p className="mb-4 text-gray-600 text-sm">Vincit Edupath offers counseling and admission guidance for students planning to study MBBS abroad. Our services may include:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {[
                  "Career counseling",
                  "University selection guidance",
                  "Admission assistance",
                  "Documentation support",
                  "Visa guidance",
                  "Student onboarding support",
                  "Information related to universities and countries"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-sm text-gray-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-600 text-sm italic font-medium">
                Our role is limited to guidance and support throughout the admission process.
              </p>
            </section>

            {/* Section 3 */}
            <section id="eligibility" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility To Use Services</h2>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <p>Users accessing our website or services should be at least 18 years old or must use the services under the supervision or consent of parents or legal guardians.</p>
                <p>By using our website, users confirm that the information shared by them is correct and genuine.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="responsibilities" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
              <p className="text-gray-600 text-sm mb-4">Users are expected to use the website responsibly and lawfully. The following activities are strictly prohibited:</p>
              
              <ul className="space-y-2 pl-0 list-none">
                {[
                  "Sharing false or misleading information",
                  "Uploading harmful, offensive, or illegal content",
                  "Attempting unauthorized access to the website or systems",
                  "Disrupting website functionality or security",
                  "Misusing the information or services provided on the website"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-red-500 font-bold mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <blockquote className="mt-4 border-l-4 border-amber-500 bg-amber-50 p-4 text-sm text-gray-700 rounded-r-xl">
                Vincit Edupath reserves the right to restrict access if any misuse is identified.
              </blockquote>
            </section>

            {/* Section 5 */}
            <section id="intellectual" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <p>All website content, including text, graphics, logos, images, and design elements, belongs to Vincit Edupath and is protected under applicable intellectual property laws.</p>
                <p>Users may not copy, reproduce, modify, or distribute website content without prior written permission.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="third-party" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Websites &amp; Links</h2>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <p>Our website may include links to third-party websites for additional information or convenience. Vincit Edupath is not responsible for the content, services, or privacy policies of external websites.</p>
                <p>Users visiting third-party websites do so at their own discretion and responsibility.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="liability" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation Of Liability</h2>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                <p>Vincit Edupath shall not be held responsible for any direct or indirect loss, damages, delays, or issues arising from the use of the website, services, university decisions, visa approvals, or external processes beyond our control.</p>
                <p>While we aim to provide accurate and updated information, we do not guarantee the completeness or accuracy of every detail available on the website.</p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="indemnification" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. User Agreement &amp; Indemnification</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                By using our services, users agree to protect and hold harmless Vincit Edupath, its team members, partners, and affiliates from any claims, liabilities, or expenses resulting from misuse of the website or violation of these Terms.
              </p>
            </section>

            {/* Section 9 */}
            <section id="law" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Applicable Law &amp; Jurisdiction</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                These Terms &amp; Conditions are governed by the laws of India. Any disputes related to the use of the website or services shall fall under the jurisdiction of the appropriate courts in India.
              </p>
            </section>

            {/* Section 10 */}
            <section id="changes" className="scroll-mt-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes To Terms &amp; Conditions</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Vincit Edupath may revise or update these Terms &amp; Conditions at any time without prior notice. Updated terms will be published on this page, and continued use of the website will indicate acceptance of the revised terms.
              </p>
            </section>

            {/* Section 11 */}
            <section id="contact" className="scroll-mt-6 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">11. Contact Us</h2>
              <p className="text-gray-600 text-sm mb-4">
                For any questions, concerns, or support related to these Terms &amp; Conditions, users may contact Vincit Edupath through the details available on the Contact Us page of the website.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm"
              >
                Go to Contact Us
              </a>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}