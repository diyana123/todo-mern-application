import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import {HomeLayout,Landing,Register,Login,DashboardLayout,Error,AddJob,Stats,AllJobs,Profile,Admin} from './pages'
// import {action as registerAction} from './pages/Register'
import {action as addJobAction} from './pages/AddJob'
import AllTasks from './pages/AllTasks'
// import {loader as allJobsLoader} from './pages/AllJobs'





const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout />,
    errorElement:<Error />,
    children : [
      {
        index:true,
        element:<Landing />,
      },
      {
        path:'Register',
        element:<Register />,
        // action : () => {
        //   console.log('hello')
        // }
        // action:registerAction,
      },
      {
        path:'Login',
        element:<Login />,
      },
      {
        path:'DashboardLayout',
        element:<DashboardLayout />,
       
        children : [
          {
            index:true,
            element:<AddJob />,
            action:addJobAction
          },
          {
            path:'Stats',
            element:<Stats />,
          },
          {
            path:'AllTasks',
            element:<AllTasks />,
          },
          {
            path:'Profile',
            element:<Profile/>,
            // loader:allJobsLoader
          },
          {
            path:'admin',
            element:<Admin/>,
          }
        ]
      },
    ]
  },

  
 

 
])


const App = () => {
    return (
     <RouterProvider router={router} />
    )
}

export default App
