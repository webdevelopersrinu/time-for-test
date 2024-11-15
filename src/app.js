import React, { lazy, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Restaurant from "./components/Restaurant.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/reduxStore.js";
import Cart from "./components/Cart.js";

const About = lazy(() => import("./components/About.js"));

const AppLayout = () => {
  const [name, setName] = useState("srinu");
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ name, setName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const AppComponent = () => {
  return <h1>Hello</h1>;
};

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// root.render(<AppComponent />);
