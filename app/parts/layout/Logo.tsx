
import Link from 'next/link'	

const Logo = ({ fn }: { fn?: () => void }) => {
  return (
	<Link href="/dashboard" aria-label="Advocacy home" onClick={fn}>
	  <div className="font-cormorant text-[24px] font-semibold text-gray-800 md:text-[36px]">
	    LoremAdvocates
	  </div>
	</Link>
  )
}

export default Logo
