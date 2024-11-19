import Footer from "./Footer"
import Header from "./header"
import {Outlet} from "react-router-dom"


function Layout() {
  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer> 
    </>
  )
}

export default Layout