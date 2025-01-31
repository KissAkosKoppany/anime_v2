import {
  Drawer,
} from "@material-tailwind/react";
import SideBarNavigation from "../../SideBarNavigation";
import SearchField from "../SearchField";
 
export default function SideNavModal({ isDrawerOpen, closeDrawer}) {
 
  return (
    <>
      <Drawer className="bg-gray-900" open={isDrawerOpen} onClose={closeDrawer}>
        <div className="block sm:hidden p-3 w-64 m-auto pb-0">
          <SearchField />
        </div>
        <SideBarNavigation />
      </Drawer>
    </>
  );
}