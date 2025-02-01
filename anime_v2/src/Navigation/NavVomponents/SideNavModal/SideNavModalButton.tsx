import {
  IconButton,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { SideNavProps } from "../../../App";

export default function SideNavModalButton({ isDrawerOpen, openDrawer}: SideNavProps) {
    
    return (
        <IconButton className="block xl:hidden" variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="text-gray-300 h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="text-gray-300 h-8 w-8 stroke-2" />
        )}
      </IconButton>
    )
}