import MainNav from "./Navigation/MainNav"
import TestNav from "./Navigation/TestNav"

function App() {


  
  return (
    <div className="bg-gray-900 bg-opacity-90">
      <MainNav />
      <div className="bod flex">
        <div className="sidnav fixed top-17">
          <TestNav />
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
