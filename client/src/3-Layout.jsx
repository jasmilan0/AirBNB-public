import Header from "./components/1-Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
   <div className="py-4 px-8 flex flex-col min-h-screen">
      <Header />
      <Outlet />
   </div>
  
  )
}

export default Layout