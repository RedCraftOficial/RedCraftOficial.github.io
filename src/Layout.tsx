import { Outlet } from "react-router-dom"

import { Header } from "./components/Header/"
// import { Footer } from "./components/Footer/"

export const Layout = () => {
  return <>
    <Header />
    <div className="container mx-auto px-3 pt-20">
      <Outlet />
    </div>
    {
      // <Footer />
    }
  </>
}

