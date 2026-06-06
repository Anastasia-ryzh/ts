import { createBrowserRouter, RouterProvider } from "react-router";
import { Todolist } from "./components/Todolist";
import Dummy1 from "./components/Dummy1";
import Dummy2 from "./components/Dummy2";
import Posts from "./components/Posts";


const router = createBrowserRouter([
  {
    path: '/',
    Component: Dummy1,
    children: [
      {
    path: 'dummy2',
    Component: Dummy1
  },
  {
    path: 'activated',
    Component: Dummy2
  }, 
  {
    path: 'posts',
    Component: Posts
  }
    ],
  },
  
  ])

function App () {
  return (
    <>
    <RouterProvider router={router}/>
      <Todolist/>
    </>
  )
}

export default App; 
