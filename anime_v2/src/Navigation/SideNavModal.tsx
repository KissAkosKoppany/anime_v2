import React from "react";
import {
  IconButton,
  Drawer,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import SideBarNavigation from "./SideBarNavigation";
import SearchField from "./NavVomponents/SearchField";
 
export default function SideNavModal() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

 
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
 
  return (
    <>
      <IconButton className="block xl:hidden" variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="text-gray-300 h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="text-gray-300 h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer className="bg-gray-900" open={isDrawerOpen} onClose={closeDrawer}>
        <div className="block sm:hidden p-3 w-64 m-auto pb-0">
          <SearchField />
        </div>
        <SideBarNavigation />
      </Drawer>
    </>
  );
}