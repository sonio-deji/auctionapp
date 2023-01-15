import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import Auction from "./pages/auction/Auction";
import Drop from "./pages/drop/Drop";
import LiveAuction from "./pages/liveauction/LiveAuction";
import Cart from "./pages/cart/Cart";
import CheckoutHeader from "./components/checkoutHeader/CheckoutHeader";
import ShippingDetails from "./pages/shippingDetails/ShippingDetails";
import PaymentDetails from "./pages/paymentDetails/PaymentDetails";
import ConfirmationPage from "./pages/confirmationPage/ConfirmationPage";
import "./App.scss";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  };
  const CheckoutLayout = () => {
    return (
      <div>
        <CheckoutHeader />
        <Outlet />
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
          path: "/product",
          element: <Product />,
        },
        {
          path: "/product/:id",
          element: <ProductDetail />,
        },
        {
          path: "/auction",
          element: <Auction />,
        },
        {
          path: "/drop",
          element: <Drop />,
        },
        {
          path: "/confirmationpage",
          element: <ConfirmationPage />,
        },
        {
          path: "/",
          element: <CheckoutLayout />,
          children: [
            {
              path: "/cart",
              element: <Cart />,
            },
            {
              path: "/shippingdetails",
              element: <ShippingDetails />,
            },
            {
              path: "/paymentdetails",
              element: <PaymentDetails />,
            },
          ],
        },
      ],
    },
    {
      path: "/liveauction/:id",
      element: <LiveAuction />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
