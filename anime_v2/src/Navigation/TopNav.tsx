import { useEffect } from "react";
import {
  Navbar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AvatarWithDropdown from "./NavVomponents/AvatarWithDropdown";
import { SearchInput } from "./NavVomponents/SearchInput";

export type NavigationProps = {
  openNav: boolean
  setOpenNav: (boolean: boolean) => void
}
 
export default function TopNav({ setOpenNav, openNav }: NavigationProps) {
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(true);
 
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto max-w-full px-6 py-3 shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          OTAKU LAND
        </Typography>

        <div className="mx-auto md:block hidden w-72">
          <SearchInput />
        </div>

        <div className="mr-3 ml-auto md:ml-0">
          <AvatarWithDropdown />
        </div>

        <IconButton
          variant="text"
          className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
    </Navbar>
  );
}