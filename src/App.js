import DottedSquare from "./components/Dottedsquare";
import Footer from "./components/Footer";
import Menus from "./components/Menus";

function App() {
  return (
   
    <div className="center-wrapper" style={{position: "relative"}}>
      <h1 style={{position: "absolute", top: 180, fontSize:"50px", color:"rgb(248, 0, 103)", textShadow: "1px 2px 3px black"}}>Framer Motion - Project (1)</h1>
      <Menus />
      
    </div>
      
      
   
  );
}

export default App;
