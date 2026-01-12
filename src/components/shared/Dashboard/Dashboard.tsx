import TopBar from './TopBar'
import TopSection from './TopSection'
import TopStats from './TopStats'
import ContributionGraph from './ContributionGraph'
import ReportAnalytics from './ReportAnalytics/ReportAnalytics'

const Dashboard = () => {
  return (
    <div className="bg-secondary w-full h-full rounded-[2.25rem] border-border-1 border p-6 z-0">
        <TopBar/>
        <TopSection/>
        <TopStats/>
        <ContributionGraph/>
        <ReportAnalytics/>
    </div> 
  )
}

export default Dashboard