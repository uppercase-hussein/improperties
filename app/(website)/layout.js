import "../globals.css";
import StickyNavbar from "./components/app/StickyNavbar";
import Preloader from "./components/app/Preloader";
import Navbar from "./components/app/Navbar";
import Footer from "./components/app/Footer";
import FooterCTA from "./components/app/FooterCTA";
import MobileMenu from "./components/app/MobileMenu";
import ProgressBar from "./components/app/ProgressBar";
import 'moment-timezone';

export const metadata = {
  title: "IM Properties | Property Development & Management",
  description:
    "Property Development |Property Management | Building construction| Architectural Designs | Document verification |Interior Decoration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* slick slider */}
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* slick slider */}
        {/* Googel Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=DM+Sans%3A400%2C400i%2C500%2C500i%2C700%2C700i&subset=latin%2Clatin-ext"
          type="text/css"
          media="all"
        />
        {/* Googel Fonts */}
        {/* Plugins */}
        <link
          rel="stylesheet"
          href="assets/css/plugins/bootstrap.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/plugins/animate.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/plugins/slick.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/plugins/select.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/plugins/owl.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/plugins/jquery.fancybox.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/plugins/rangeslider.css"
          type="text/css"
          media="all"
        />
        {/* Plugins */}
        {/* Vankine Styles */}
        <link
          rel="stylesheet"
          href="assets/css/global-settings.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/theme.css"
          type="text/css"
          media="all"
        />
        {/* Vankine Styles */}
        {/* Icon Styles */}
        <link
          rel="stylesheet"
          href="assets/css/plugins/uicons-regular-rounded.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/plugins/uicons-regular-straight.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/plugins/font-awesome.min.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/plugins/flaticon_vankine.css"
          type="text/css"
          media="all"
        />
        {/* Icon Styles */}
      </head>
      {/* mobile_menu_box-visible */}
      <body
        className={`theme-vankine scrollbarcolor`}
      >
        <div id="page" className="page_wapper hfeed site">
          {/* <Preloader/> */}
          <Navbar />
          <StickyNavbar />
          <div id="wrapper_full" className="content_all_warpper">
            <div id="content" className="site-content">
              {children}
            </div>

            <FooterCTA />
            <Footer />
          </div>
          <MobileMenu />
          <ProgressBar />
        </div>

       
        <script type='text/javascript' src='assets/js/plugins/jquery.min.js'></script>
        <script
          type="text/javascript"
          src="assets/js/plugins/bootstrap.bundle.min.js"
        ></script>
       
        <script
          type="text/javascript"
          src="assets/js/plugins/rangeslider.min.js"
        ></script>
        <script
          type="text/javascript"
          src="assets/js/plugins/counterup.js"
        ></script>
        <script type='text/javascript' src='assets/js/main.js'></script>
        <script type="text/javascript" src="assets/js/custom.js"></script>
      </body>
    </html>
  );
}
