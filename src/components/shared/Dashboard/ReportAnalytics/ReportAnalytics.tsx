import RevenueByPlatform from './RevenueByPlatform'
import DealsAmountChart from './DealsAmountChart'
import PlatformValue from './PlatformValue'

const ReportAnalytics = () => {
  return (
    <div className='flex gap-2 mt-4 py-2 pb-0'>
        <div className='flex flex-col w-1/2 gap-2'>
            <div className='flex gap-2'>
                <RevenueByPlatform/>
                <DealsAmountChart/>
            </div>
            <PlatformValue/>
        </div>
        {/* <RevenueByPlatform/> */}
    </div>
  )
}

export default ReportAnalytics