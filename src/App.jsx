import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layouts/Main/Main'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import Shopping from './pages/Shopping/Shopping'
import Todo from './pages/Todo/Todo'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/zakupy',
        element: <Shopping />,
        errorElement: <Error />,
      },
      {
        path: '/notatnik',
        element: <Todo />,
        errorElement: <Error />,
      },
      
    ],
  },
])

function App() {
  return (
    <div id='root'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
