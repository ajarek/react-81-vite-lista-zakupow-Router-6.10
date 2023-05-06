import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from 'react-router-dom'
import { createContext, useState } from 'react'
import Main from './layouts/Main/Main'
import Error from './pages/Error/Error'
import Home from './pages/Home/Home'
import Shopping from './pages/Shopping/Shopping'
import Todo from './pages/Todo/Todo'

export const AppContext = createContext()

const router = createHashRouter([
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
  const [checkedValues, setCheckedValues] = useState([])
  const [value, setValue] = useState('')
  const [todo, setTodo] = useState([])
  return (
    <div id='root'>
      <AppContext.Provider
        value={{
          checkedValues,
          setCheckedValues,
          value,
          setValue,
          todo,
          setTodo,
        }}
      >
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
