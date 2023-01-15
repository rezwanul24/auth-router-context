
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Main from './component/Layout/Main';
import Login from './component/Login/Login';
import Orders from './component/Orders/Orders';
import Register from './register/Register';
import PrivetRoute from './Routes/PrivetRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/orders',
          element: <PrivetRoute><Orders></Orders></PrivetRoute>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
      ]
    }
  ])

  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
