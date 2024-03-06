import Footer from "./admin/components/footer/Footer";
import Menu from "./admin/components/menu/Menu";
import Navbar from "./admin/components/navbar/Navbar";
import Home from "./admin/pages/home/Home";
import Collaborators from "./admin/pages/collaborators/Collaborators";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Login } from "./login/Login";
import "./styles/global.scss";
import Projects from "./admin/pages/projects/Projects";
import HomeCollab from "./employees/pages/HomeCollab";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/collaborators",
          element: <Collaborators />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/collab",
      element: <HomeCollab />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
