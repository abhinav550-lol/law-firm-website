import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-background">
      <div className="mx-auto flex flex-col items-center gap-2 px-4 py-3 text-center text-xs text-gray-500 sm:flex-row  sm:gap-4 sm:px-6 sm:justify-around">
        <p>© {new Date().getFullYear()} LoremAdvocates. All rights reserved.</p>
        <div className="flex gap-4">
          <Link
            href="/privacy-policy"
            className="transition-colors hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-800"
          >
            Privacy Policy
          </Link>
          <Link
            href="/disclaimer"
            className="transition-colors hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-800"
          >
            Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
