import DashboardHero from '@/app/parts/ui/DashboardHero'
import DashboardWhoWeAre from '@/app/parts/ui/DashboardWhoWeAre'

const DashboardPage = () => {
  return (
    <main className="bg-background flex lg:min-h-[88vh] flex-col items-center justify-center">
      <DashboardHero />
      <DashboardWhoWeAre />
    </main>
  )
}

export default DashboardPage
