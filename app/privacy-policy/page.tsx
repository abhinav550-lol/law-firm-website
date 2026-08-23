import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Law Firm",
  description:
    "Learn how we collect, use, and protect information submitted through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-[38px] font-semibold leading-[1.15] text-deep-green md:text-[56px] md:leading-[1.05]">
            Privacy Policy
          </h1>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-text">
            <div className="space-y-4">
              <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
                Information We Collect
              </h2>
              <p>
                Through the contact form on this website, we collect the
                following information:
              </p>
              <ul className="list-inside list-disc space-y-1 text-text">
                <li>Full Name</li>
                <li>Phone Number</li>
                <li>Email Address (if provided)</li>
                <li>Subject of enquiry</li>
                <li>Message content</li>
                <li>Preferred contact method (if provided)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
                Why We Collect This Information
              </h2>
              <p>
                The information collected through the contact form is used
                solely to respond to your enquiry. We collect only the
                information necessary to process and respond to your
                communication.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
                How Your Information Is Used
              </h2>
              <p>
                The information you submit through the contact form is
                forwarded to the designated lawyers or staff of the firm for
                the purpose of responding to your enquiry. Your information is
                not used for marketing purposes.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
                Email Processing
              </h2>
              <p>
                Contact form submissions are processed and sent as email
                notifications to the firm&apos;s designated email addresses.
                These emails are managed through secure email services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
                Third-Party Services
              </h2>
              <p>
                This website may use third-party services for hosting,
                analytics, and form processing. These services may collect
                certain information as part of their standard operation. We
                do not sell or share your personal information with third
                parties for marketing purposes.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
                Data Retention
              </h2>
              <p>
                Information submitted through the contact form is retained for
                as long as necessary to address the enquiry and as required by
                applicable regulations. We do not retain information
                unnecessarily.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
                Security
              </h2>
              <p>
                We implement reasonable security measures to protect the
                information submitted through this website. However, no method
                of transmission over the Internet is completely secure, and we
                cannot guarantee absolute security.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
                Contact for Privacy-Related Questions
              </h2>
              <p>
                If you have any questions about this privacy policy or how
                your information is handled, please contact us at
                info@lawfirm.example.
              </p>
            </div>

            <p className="text-sm text-muted-text">
              This privacy policy is subject to the applicable laws of India.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
