
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { ToastContainer } from 'react-toastify'

function App() {
 
  return (
    <div className='max-w-[1600px] mx-auto'>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
