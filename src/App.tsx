// import Layout from "@Layout/components/layout/Layout"

import Dashboard from "./components/shared/Dashboard/Dashboard"
import Navbar from "./components/shared/Navbar/Navbar"

const App = () => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center p-2 md:p-4 md:pl-1">
      <Navbar/>
      <Dashboard/>
    </div>
  )
}

export default App