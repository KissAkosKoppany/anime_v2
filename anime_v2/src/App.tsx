import SideBarNavigation from "./Navigation/SideBarNavigation"
import TopNav from "./Navigation/TopNav"

function App() {


  
  return (
    <div className="bg-gray-900 bg-opacity-90">
      <TopNav />
      <div className="bod flex">
        <div className="sidnav fixed top-17">
          <SideBarNavigation />
        </div>
        <div className="content ml-72">
          <div className="h-96">hello</div>
          {/* <div className="h-96">hello</div>
          <div className="h-96">hello</div> */}
        </div>
      </div>
    </div>
  )
}

export default App
