import { useState } from 'react';
import TopNav from './TopNav'
import SideNav from './SideNav'

function MainNav() {

  const [openNav, setOpenNav] = useState(false)

    return (
        <>
          <TopNav setOpenNav={setOpenNav} openNav={openNav} />
          <SideNav openNav={openNav} setOpenNav={setOpenNav} />
        </>
    )
}

export default MainNav;