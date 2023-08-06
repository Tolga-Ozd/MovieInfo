import Home from "./components/Home" 
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"


function App() {
  return (
    <>
     <h1 className="d-flex m-4 justify-content-center display-1">IMDB TOP 8</h1>
      <div className="d-flex justify-content-center vertical-aling align-items-center  " >
      
      <Home />
    </div>
    </>
  )
}

export default App
