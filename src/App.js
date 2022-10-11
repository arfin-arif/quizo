
import { Button } from 'react-bootstrap';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Statistic from './components/Statistic/Statistic';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {

      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>

        },
        {
          path: '/blog',

          element: <Blog></Blog>

        },
        {
          path: '/statistic',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistic></Statistic>

        },
      ]

    },
    {
      path: '*',

      element: <h3 className='mt-5'>404! <h6>link is not working</h6></h3>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
