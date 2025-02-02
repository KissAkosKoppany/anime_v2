import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Card,
} from "@material-tailwind/react";
import {
  BookOpenIcon,
  FunnelIcon,
  NumberedListIcon,
  CalendarDaysIcon
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router";
 
export default function SideBarNavigation() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };
 
 
  return (
    <>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-4.5rem)] w-72 p-4 bg-gray-900 rounded-none"
        >
          <List>
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`text-blue-gray-200 mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0 hover:bg-blue-gray-600 " selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <FunnelIcon className="text-blue-gray-200 h-5 w-5" />
                  </ListItemPrefix>
                  <Typography className="text-blue-gray-200 mr-auto font-normal">
                    Categories
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0 text-blue-gray-200">
                  <Link to="anime-search">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Anime Search
                    </ListItem>
                  </Link>
                  <Link to="manga-search">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Manga Search
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`text-blue-gray-200 mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0 hover:bg-blue-gray-600" selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <NumberedListIcon className="text-blue-gray-200 h-5 w-5" />
                  </ListItemPrefix>
                  <Typography className="text-blue-gray-200 mr-auto font-normal">
                    Top Lists
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="text-blue-gray-200 p-0">
                  <Link to="all-anime">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      All Anime
                    </ListItem>
                  </Link>
                  <Link to="top-airing">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Top Airing
                    </ListItem>
                  </Link>
                  <Link to="top-upcoming">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Top Upcoming
                    </ListItem>
                  </Link>
                  <Link to="top-movies">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Top Movies
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            <Link to="seasonal-anime">
              <ListItem className="text-blue-gray-200 hover:bg-blue-gray-600 hover:text-blue-gray-200">
                <ListItemPrefix>
                  <CalendarDaysIcon className="text-blue-gray-200 h-5 w-5" />
                </ListItemPrefix>
                Seasonal Anime
              </ListItem>
            </Link>
            <Accordion
              open={open === 3}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 3 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 3}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="border-b-0 p-3 hover:bg-blue-gray-600 text-blue-gray-200"
                >
                  <ListItemPrefix>
                    <BookOpenIcon className="text-blue-gray-200 h-5 w-5" />
                  </ListItemPrefix>
                  <Typography className="text-blue-gray-200 mr-auto font-normal">
                    Manga
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="text-blue-gray-200 p-0">
                  <Link to="top-manga">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Top Manga
                    </ListItem>
                  </Link>
                  <Link to="manga-reader">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      Manga Reader
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
          </List>
        </Card>
    </>
  );
}