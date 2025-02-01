import { Link } from "react-router"
import SearchField from "./NavVomponents/SearchField"
import SideNavModalButton from "./NavVomponents/SideNavModal/SideNavModalButton"
import { SideNavProps } from "../App"

export default function TopNav({ isDrawerOpen, openDrawer }: SideNavProps) {

  return (
    <div className="flex justify-between min-h-[4.5rem] items-center sticky top-0 bg-gray-900 py-3 px-5 text-gray-300 border-b border-gray-600">
      <Link to="/">
        <p>OTAKULAND</p>
      </Link>
      <div className="hidden sm:block w-72">
        <SearchField />
      </div>
      <div>
        <SideNavModalButton isDrawerOpen={isDrawerOpen} openDrawer={openDrawer} />
      </div>
    </div>
  )
} 