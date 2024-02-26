import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import {HomeLayout,Landing,Register,Login,DashboardLayout,Error,AddTask,AllTasks} from './pages'
// import EditTask from './pages/EditTask'
import {action as addTaskAction} from './pages/AddTask'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { loader as editJobLoader } from './pages/EditTask';
// import { action as editJobAction } from './pages/EditTask';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 1000 * 60 * 5,
//     },
//   },
// });






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
            element:<AddTask />,
            action:addTaskAction
          },
         
          {
            path:'AllTasks',
            element:<AllTasks />,
          },

         

          // {
          //   path: 'edit-job/:id',
          //   element: <EditTask />,
          //   loader: editJobLoader(queryClient),
          //   action: editJobAction(queryClient),
          // },
         
         
        ]
      },
    ]
  },

  
 

 
])


const App = () => {
    return (
      // <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    //   <ReactQueryDevtools initialIsOpen={false} />
    // </QueryClientProvider>
    )
}

export default App
