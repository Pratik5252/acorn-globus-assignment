import React from 'react'
import RevenueByPlatform from './RevenueByPlatform'
import DealsAmountChart from './DealsAmountChart'

const ReportAnalytics = () => {
  return (
    <div className='flex gap-2 mt-4 py-2 border border-red-300'>
        <div className='w-1/2'>
            <div className='flex gap-2'>
                <RevenueByPlatform/>
                <DealsAmountChart/>
            </div>
            <RevenueByPlatform/>
        </div>
        {/* <RevenueByPlatform/> */}
    </div>
  )
}

export default ReportAnalytics