import { Input } from "@material-tailwind/react"
import SideNav from "./SideNav"

export default function TopNav() {

  return (
    <div className="flex justify-between items-center bg-blue-gray-900 py-3 px-5 text-gray-300">
      <p>OTAKULAND</p>
      <div className="w-72">
        <Input color="white" label="Search" />
      </div>
      <div>
        <SideNav />
      </div>
    </div>
  )
}