import DashboardHero from '@/components/ui/DashboardHero'
import DashboardWhoWeAre from '@/components/ui/DashboardWhoWeAre'

const DashboardPage = () => {
  return (
    <main className="bg-background flex lg:min-h-[88vh] flex-col items-center justify-center">
      <DashboardHero />
      <DashboardWhoWeAre />
    </main>
  )
}

export default DashboardPage
