import SideBarNavigation from "./Navigation/SideBarNavigation"
import TopNav from "./Navigation/TopNav"
import { Route, Routes } from "react-router"
import Home from "./Routes/Home/Home"
import AnimeSearch from "./Routes/Categories/AnimeSearch"
import MangaSearch from "./Routes/Categories/MangaSearch"
import AllAnime from "./Routes/TopLists/AllAnime"
import TopAiring from "./Routes/TopLists/TopAiring"
import TopUpcoming from "./Routes/TopLists/TopUpcoming"
import TopMovies from "./Routes/TopLists/TopMovies"
import SeasonalAnime from "./Routes/SeasonalAnime/SeasonalAnime"
import TopManga from "./Routes/Manga/TopManga"
import MangaReader from "./Routes/Manga/MangaReader"
import { useState } from "react"
import SideNavModal from "./Navigation/NavVomponents/SideNavModal/SideNavModal"

export type SideNavProps = {
  isDrawerOpen: boolean;
  openDrawer?: () => void;
  closeDrawer?: () => void;
}

function App() {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
   
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

  
  return (
    <div className="bg-gray-900 bg-opacity-90">
      <TopNav isDrawerOpen={isDrawerOpen} openDrawer={openDrawer} />
      <div className="bod flex">
        <div className="sidnav fixed top-17 hidden xl:block">
          <SideBarNavigation />
        </div>
        <SideNavModal isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
        <div className="content xl:ml-72">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="anime-search" element={<AnimeSearch />} />
            <Route path="manga-search" element={<MangaSearch />} />
            <Route path="all-anime" element={<AllAnime />} />
            <Route path="top-airing" element={<TopAiring />} />
            <Route path="top-upcoming" element={<TopUpcoming />} />
            <Route path="top-movies" element={<TopMovies />} />
            <Route path="seasonal-anime" element={<SeasonalAnime />} />
            <Route path="top-manga" element={<TopManga />} />
            <Route path="manga-reader" element={<MangaReader />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
