import RevenueByPlatform from './RevenueByPlatform'
import DealsAmountChart from './DealsAmountChart'
import PlatformValue from './PlatformValue'
import UserStatsTable from '../UserStatsTable/UserStatsTable'

const ReportAnalytics = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-6 mt-4 pt-2 pb-0'>
        <div className='flex flex-col w-full xl:w-1/2 h-full gap-2'>
            <div className='flex flex-col md:flex-row gap-2'>
                <RevenueByPlatform/>
                <DealsAmountChart/>
            </div>
            <PlatformValue/>
        </div>
        <UserStatsTable/>
    </div>
  )
}

export default ReportAnalytics