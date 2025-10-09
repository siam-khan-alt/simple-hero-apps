import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className=" bg-gray-200  flex flex-col">
      <Navbar></Navbar>
      <div className="flex-1 min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
