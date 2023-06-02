import { createBrowserRouter } from "react-router-dom";
import About from "./pages/aboutUs/About";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import Home from "./pages/home/home.pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
