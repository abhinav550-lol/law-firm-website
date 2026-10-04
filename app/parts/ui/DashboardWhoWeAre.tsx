'use client'

import { useRouter } from 'next/navigation'

import Button from '@/app/parts/layout/Button'

const DashboardWhoWeAre = () => {
  const router = useRouter()

  return (
    <section className="border-t border-gray-200/80 bg-white px-6 py-20 sm:py-24 md:px-12 lg:px-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="animate-fade-up animate-700ms">
          <p className="type-eyebrow text-button">
            Who We Are
          </p>
          <h2 className="type-section mt-5 max-w-md">
            Thoughtful advocacy.
            <br />
            Strategic perspective.
          </h2>
        </div>

        <div className="max-w-2xl lg:pt-10">
          <p className="animate-fade-up animate-700ms animate-delay-150ms font-inter text-lg leading-8 text-gray-700">
            We work where ideas, institutions, and public interest intersect.
          </p>
          <p className="type-intro animate-fade-up animate-700ms animate-delay-300ms mt-6">
            Through research, advocacy, and strategic engagement, we help shape
            informed conversations around complex issues. Our approach combines
            deep understanding with purposeful action—bringing clarity to
            complexity and perspective to public discourse.
          </p>
          <Button
            className="animate-fade-up animate-700ms animate-delay-300ms mt-9"
            onClick={() => router.push('/about')}
          >
            Discover Our Approach <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default DashboardWhoWeAre
