import TopNav from './TopNav'
import SideNav from './SideNav'

export type TopNavType = {
  navigation: {
      name: string
      href: string
      current: boolean
  }[]
}

function MainNav() {

    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
      ]

    return (
        <>
          <TopNav navigation={navigation} />
          <SideNav />
        </>
    )
}

export default MainNav;