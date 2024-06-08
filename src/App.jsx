import { RouterProvider } from "react-router-dom";
import { router } from "./lib/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DataProvider from "./components/db/DataProvider";

const App = () => {
  return (
    <DataProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </DataProvider>
  );
};

export default App;
