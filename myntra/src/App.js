import { Context } from "./components/Context/Context";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
function App() {
  return (
    <>
    <Navbar />
    <div>
    <Sidebar />
    <Context/>
    </div>
    
    </>
   
  );
}

export default App;
