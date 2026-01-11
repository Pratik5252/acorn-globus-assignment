// import Layout from "@Layout/components/layout/Layout"

import Dashboard from "./components/shared/Dashboard/Dashboard"
import Navbar from "./components/shared/Navbar/Navbar"

const App = () => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center p-4 pl-1">
      <Navbar/>
      <Dashboard/>
    </div>
  )
}

export default App