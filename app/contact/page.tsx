import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Law Firm",
  description:
    "Get in touch with our office. View our address, phone number, email, and office hours.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-[38px] font-semibold leading-[1.15] text-deep-green md:text-[56px] md:leading-[1.05]">
            Contact
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text">
            For general enquiries, please reach out to our office using the
            details below or submit the form.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
              Send an Enquiry
            </h2>
            <p className="mt-2 text-sm text-muted-text">
              Fields marked with * are required.
            </p>

            <form className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-deep-green"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-deep-green"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-deep-green"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-deep-green"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-deep-green"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green resize-none"
                />
              </div>

              <div>
                <label
                  htmlFor="preferred-contact"
                  className="block text-sm font-medium text-deep-green"
                >
                  Preferred Contact Method
                </label>
                <select
                  id="preferred-contact"
                  name="preferred-contact"
                  className="mt-2 w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text outline-none focus:border-primary-green focus:ring-1 focus:ring-primary-green"
                >
                  <option value="">Select</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary-green px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-deep-green"
              >
                Submit Enquiry
              </button>

              <p className="text-xs text-muted-text">
                Please do not submit confidential or sensitive information
                through this form. Submission of this form does not establish
                an advocate-client relationship.
              </p>
            </form>
          </div>

          {/* Office Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-[24px] font-semibold leading-[1.25] text-deep-green">
                Office Information
              </h2>
              <div className="mt-6 space-y-4 text-sm text-text">
                <div>
                  <p className="font-medium text-deep-green">Firm Name</p>
                  <p className="text-muted-text">Law Firm Name</p>
                </div>
                <div>
                  <p className="font-medium text-deep-green">Office Address</p>
                  <p className="text-muted-text">
                    Office Address Line 1
                    <br />
                    City, State — 000000
                    <br />
                    India
                  </p>
                </div>
                <div>
                  <p className="font-medium text-deep-green">Phone</p>
                  <p className="text-muted-text">+91 XXXXX XXXXX</p>
                </div>
                <div>
                  <p className="font-medium text-deep-green">Email</p>
                  <p className="text-muted-text">info@lawfirm.example</p>
                </div>
                <div>
                  <p className="font-medium text-deep-green">Office Hours</p>
                  <p className="text-muted-text">
                    Monday – Friday: 10:00 AM – 6:00 PM
                    <br />
                    Saturday: By Appointment
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video w-full rounded-lg bg-pale-green" />
          </div>
        </div>
      </section>
    </main>
  );
}
