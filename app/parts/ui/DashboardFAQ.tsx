'use client'

import Link from 'next/link'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const pageLinkClassName =
  'font-semibold text-[#315F3B] underline decoration-[#315F3B] underline-offset-4 transition-colors hover:text-[#264b2e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315F3B]'

const faqs = [
  {
    question: 'What areas of law does the firm specialise in?',
    answer: (
      <>
        Explore{' '}
        <Link href="/expertise" className={pageLinkClassName}>
          Expertise
        </Link>{' '}
        to learn about our practice areas and areas of legal specialisation.
      </>
    ),
  },
  {
    question:
      'I want to know more about the advocates at the firm. Where can I find their profiles?',
    answer: (
      <>
        Visit{' '}
        <Link href="/team" className={pageLinkClassName}>
          Team
        </Link>{' '}
        to learn about our advocates, their experience, and their professional
        backgrounds.
      </>
    ),
  },
  {
    question: 'Where can I learn about specific legal topics?',
    answer: (
      <>
        Browse{' '}
        <Link href="/legal-resources" className={pageLinkClassName}>
          Legal Resources
        </Link>{' '}
        for articles and explainers covering legal concepts, procedures, and
        common legal questions.
      </>
    ),
  },
  {
    question: 'Do you have resources explaining topics like anticipatory bail?',
    answer: (
      <>
        Yes. Explore{' '}
        <Link href="/legal-resources" className={pageLinkClassName}>
          Legal Resources
        </Link>{' '}
        for accessible explainers on topics such as anticipatory bail, bail
        procedures, and other areas of law.
      </>
    ),
  },
  {
    question: 'I want to contact the firm. How can I do that?',
    answer: (
      <>
        Visit{' '}
        <Link href="/contact" className={pageLinkClassName}>
          Contact
        </Link>{' '}
        to find our office details, phone, email, and available contact
        options.
      </>
    ),
  },
  {
    question: "Where is the firm's office located?",
    answer: (
      <>
        You can find our office address and location details on the{' '}
        <Link href="/contact" className={pageLinkClassName}>
          Contact
        </Link>{' '}
        page.
      </>
    ),
  },
  {
    question: 'How can I find the right area of expertise for my legal matter?',
    answer: (
      <>
        Start with{' '}
        <Link href="/expertise" className={pageLinkClassName}>
          Expertise
        </Link>{' '}
        to explore our practice areas and identify the area most relevant to
        your matter.
      </>
    ),
  },
  {
    question: 'Where can I find the latest articles and insights from the firm?',
    answer: (
      <>
        Visit{' '}
        <Link href="/legal-resources" className={pageLinkClassName}>
          Legal Resources
        </Link>{' '}
        to browse the firm&apos;s latest legal articles, insights, and
        explainers.
      </>
    ),
  },
]

const DashboardFAQ = () => {
  return (
    <section
      aria-labelledby="dashboard-faq-heading"
      className="w-full border-t border-gray-200/80 bg-background px-6 py-20 sm:py-24 md:px-12 lg:px-24 lg:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="animate-fade-up animate-700ms max-w-2xl">
          <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-button">
            FAQ
          </p>
          <h2
            id="dashboard-faq-heading"
            className="mt-5 font-cormorant text-5xl font-semibold leading-[0.95] tracking-tight text-gray-900 sm:text-6xl"
          >
            Frequently asked questions.
          </h2>
        </div>

        <Accordion className="animate-fade-up animate-700ms animate-delay-150ms mt-12 rounded-2xl border border-[#315F3B]/15 bg-white px-5 sm:px-8">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index + 1}`}
              className="border-[#315F3B]/15"
            >
              <AccordionTrigger className="font-inter py-5 pr-3 text-base font-semibold leading-6 text-gray-900 hover:no-underline aria-expanded:text-[#315F3B] [&_[data-slot=accordion-trigger-icon]]:text-[#315F3B]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-inter pb-5 text-base leading-7 text-gray-600 [&_a]:!text-[#315F3B] [&_a]:!underline [&_a]:decoration-[#315F3B] [&_a]:underline-offset-4 [&_a]:hover:!text-[#264b2e]">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default DashboardFAQ
