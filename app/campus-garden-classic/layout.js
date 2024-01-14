import Footer from "./components/Footer"
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';


export const metadata = {
  title: 'Campus Garden Classic | IM Properties',
  description: 'A Perfect Canvas for Your Future Home',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <link href="ads/1/assets/fonts/font-awesome-4.0.3/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="ads/1/assets/bootstrap/css/bootstrap.css" type="text/css" />
        <link rel="stylesheet" href="ads/1/assets/css/owl.carousel.css" type="text/css" />
        <link rel="stylesheet" href="ads/1/assets/css/magnific-popup.css" type="text/css" />
        <link rel="stylesheet" href="ads/1/assets/css/flexslider.css" type="text/css" />
        <link rel="stylesheet" href="ads/1/assets/css/style.css" type="text/css" />
      </head>
      <body data-spy="scroll" data-target=".navigation" data-offset="90">
<section id="home" />
<div className="wrapper">
{children}
<Footer/>
</div>
</body>

<script type="text/javascript" src="ads/1/assets/js/jquery-2.1.0.min.js"></script>
<script type="text/javascript" src="ads/1/assets/js/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="ads/1/assets/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="ads/1/assets/js/owl.carousel.min.js"></script>
<script type="text/javascript" src="ads/1/assets/js/jquery.flexslider-min.js"></script>
<script type="text/javascript" src="ads/1/assets/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="ads/1/assets/js/retina-1.1.0.min.js"></script>
<script type="text/javascript" src="ads/1/assets/js/jquery.magnific-popup.min.js"></script>
<script type="text/javascript" src="ads/1/assets/js/jquery.fitvids.js"></script>
<script type="text/javascript" src="ads/1/assets/js/scrollReveal.min.js"></script>
<script type="text/javascript" src="ads/1/assets/js/smoothscroll.js"></script>

<script type="text/javascript" src="ads/1/assets/js/custom.js"></script>
    </html>
  )
}
