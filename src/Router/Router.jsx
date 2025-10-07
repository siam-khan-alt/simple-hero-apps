import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installed from '../Pages/Installed/Installed';



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
        }
    ]
  }
])

export default router;