import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/AllApps';
import Installed from '../Pages/Installed/Installed';
import Details from '../Pages/Details/Details';



const router = createBrowserRouter([
  {
    path:'/',
    Component:App,
    errorElement:'',
    children:[
        {
            index: true,
            path:'/',
            Component: Home
        },
        {
          path:'/apps',
           
          Component: Apps
        }
        ,
        {
          path:'/installed',
          
          Component:Installed
        },
        {
            path:'/details/:id',
            Component:Details
        }
    ]
  }
])

export default router;