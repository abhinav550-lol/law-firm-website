'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Button from '@/app/parts/layout/Button'

const DashboardHero = () => {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden px-6 py-12 sm:py-16 md:px-12 lg:min-h-[calc(100svh-8rem)] lg:px-24 lg:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative z-10 max-w-xl text-center lg:text-left">
          <h1 className="animate-fade-up animate-700ms font-cormorant text-5xl font-semibold leading-[0.95] tracking-tight text-gray-900 sm:text-6xl lg:text-8xl">
            A Voice for
            <br />
            What Matters.
          </h1>
          <p className="animate-fade-up animate-700ms animate-delay-150ms font-inter mx-auto mt-7 max-w-lg text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
            We help shape conversations that matter through informed
            advocacy, strategic thinking, and a deep understanding of the
            forces that shape public life.
          </p>
          <Button
            className="animate-fade-up animate-700ms animate-delay-300ms mt-9"
            onClick={() => router.push('/contact')}
          >
            Get in Touch
          </Button>
        </div>

        <div className="animate-fade-scale animate-850ms animate-delay-150ms relative mx-auto h-[320px] w-full max-w-xl sm:h-[420px] lg:h-[480px]">
          <div
            aria-hidden="true"
            className="animate-fade-rotate animate-900ms animate-delay-100ms absolute -inset-5 z-0 rotate-[-7deg] rounded-[45%_55%_62%_38%/42%_38%_62%_58%] bg-[#d9ebd7] sm:-inset-8"
          />
          <div className="relative z-10 h-full w-full overflow-hidden rounded-[2rem] border-8 border-white/80 bg-white shadow-[0_24px_70px_rgba(49,95,59,0.16)] sm:rounded-[3rem]">
            <Image
              src="/assets/hero-image.png"
              alt="Legal professionals in discussion around a table"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardHero
