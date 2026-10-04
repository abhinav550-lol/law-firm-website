import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Law Firm",
  description:
    "Important disclaimers regarding the use of this website and the information provided herein.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="type-display">
            Disclaimer
          </h1>

          <div className="type-body mt-10 space-y-6">
            <p>
              The information provided on this website is for general
              informational purposes only. It is not intended to constitute
              legal advice or to be relied upon as a substitute for
              professional legal consultation.
            </p>

            <p>
              The content on this website is provided on an &quot;as is&quot;
              basis. While every effort is made to ensure the accuracy of the
              information presented, we make no representations or warranties
              of any kind, express or implied, about the completeness,
              accuracy, reliability, or availability of the information
              contained on this website.
            </p>

            <p>
              Viewing this website does not create an advocate-client
              relationship between the visitor and the firm or any of its
              lawyers. An advocate-client relationship is established only
              through a formal engagement agreement.
            </p>

            <p>
              Submitting a contact form or making an enquiry through this
              website does not establish an advocate-client relationship. The
              firm reserves the right to decline any request or engagement.
            </p>

            <p>
              Visitors should not submit confidential or sensitive information
              through this website, including through the contact form. Any
              information submitted through the website is not treated as
              privileged or confidential unless and until a formal
              advocate-client relationship has been established.
            </p>

            <p>
              This website may contain links to external websites that are not
              maintained or controlled by the firm. The firm has no control
              over and assumes no responsibility for the content, privacy
              policies, or practices of any third-party websites.
            </p>

            <p>
              The firm shall not be held liable for any loss or damage arising
              from the use of this website or reliance on the information
              contained herein.
            </p>

            <p>
              This disclaimer is subject to the applicable laws of India. Any
              disputes arising from or in connection with this website shall be
              subject to the exclusive jurisdiction of the courts in the
              relevant jurisdiction.
            </p>

            <p className="text-sm text-gray-500">
              The final wording of this disclaimer has been reviewed and
              approved by the advocates of the firm.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
