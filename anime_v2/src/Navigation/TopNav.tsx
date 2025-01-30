import { Link } from "react-router"
import SearchField from "./NavVomponents/SearchField"
import SideNavModal from "./SideNavModal"

export default function TopNav() {

  return (
    <div className="flex justify-between min-h-[4.5rem] items-center sticky top-0 bg-gray-900 py-3 px-5 text-gray-300 border-b border-gray-600">
      <Link to="/">
        <p>OTAKULAND</p>
      </Link>
      <div className="hidden sm:block w-72">
        <SearchField />
      </div>
      <div>
        <SideNavModal />
      </div>
    </div>
  )
} 