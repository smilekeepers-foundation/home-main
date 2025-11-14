import ContextProvider from "@/context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/vendors/halpes-icons/style.css";
import "@/vendors/reey-font/stylesheet.css";
import "@/vendors/fontawesome/css/all.min.css";
import "@/vendors/animate/animate.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "tiny-slider/dist/tiny-slider.css";
import 'react-toastify/dist/ReactToastify.css';

// extra csss
import "@/styles/globals.css";
import "@/styles/halpes.css";
import "@/styles/halpes-responsive.css";
import "@/styles/index.scss"
import { ToastContainer } from "react-toastify";
const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <ToastContainer autoClose={3000} hideProgressBar newestOnTop pauseOnHover/>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;
