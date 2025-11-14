import React from 'react'
import { Outlet } from "react-router"
import AppHeader from '../Component/AppHeader';
import AppNavbar from '../Component/AppNavbar';
import AppFooter from '../Component/AppFooter';
const AppLayout = ({ products, carts , setToken }) => {
  return (
    <div>
      <AppHeader />
      <AppNavbar products={products} carts={carts} setToken={setToken} />
      <Outlet/>
      <AppFooter />
    </div>
  )
}

export default AppLayout
