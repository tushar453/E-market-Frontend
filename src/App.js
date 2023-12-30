import "./App.css";
import SignUp from "./Components/Sign-up/signup";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import Account from "./Components/My account/myaccount";
import Products from "./Components/Products/products";
import Privacy from "./Components/Privacy policy/privacy";
import Terms from "./Components/Terms and condition/terms and condition";
import FAQ from "./Components/FAQ/faq";
import About from "./Components/About us/about";
import SignIn from "./Components/sign-in/signIn";
import Forgotpassword from "./Components/forgotPassword/forgotpassword";
import Home from "./Components/home/home";
import Customize from "./Components/home/customize/customize";
import Customizeframe from "./Components/home/customize/customizeframe";
import Customizemugs from "./Components/home/customize/customizemugs";
import Customizeskins from "./Components/home/customize/customizeskins";
import CoverImageTshirt from "./Components/Tshirt/coverImagetshirt";
import Tshirt from "./Components/Tshirt/Tshirts";
import Accsesories from "./Components/home/accessories/accesssries";
import Skins from "./Components/home/skins/skin";
import PhoneCover from "./Components/home/phone cover/phoneCover";
import Glasscover from "./Components/home/phone cover/3DglassCover/glasscover";
import Softcover from "./Components/home/phone cover/soft cases/softSticker";
import Chaincases from "./Components/home/phone cover/Chain cases/chaincases";
import CoverImage from "./Components/home/phone cover/3DglassCover/coverImage";
import Polaroid from "./Components/home/phone cover/Polaroid cases/polaroid";
import Aesthetic from "./Components/home/phone cover/Aesthetic cases/Aesthetic";
import Hardcover from "./Components/home/phone cover/Hard cover/hardcover";
import Stickercases from "./Components/home/phone cover/sticker cases/Sticker";
import Anime from "./Components/home/phone cover/Anime cases/Anime cases";
import Popgrippers from "./Components/home/accessories/Pop grippers/popgripper";
import Popsocket from "./Components/home/accessories/Pop sockets/popsocket";
import Frames from "./Components/home/accessories/Frames/frames";
import Mugs from "./Components/home/accessories/Mug/mug";
import Wallet from "./Components/home/accessories/Wallet/wallet";
import Wishlist from "./Components/home/wishlist/wishlist";
import Image from "./Components/home/customize/image";
import Imageframe from "./Components/home/customize/imageframe";
import Imagemugs from "./Components/home/customize/imagemugs";
import Imageskin from "./Components/home/customize/imgaeskin";
import Detail1 from "./Components/home/customize/detail1";
import Detailsframe from "./Components/home/customize/detailsframe";
import DetailsTshirt from "./Components/Tshirt/detailsTshirt";
import Detailmugs from "./Components/home/customize/detailmugs";
import Detail2 from "./Components/home/customize/detail2";
import Payment from "./Components/home/customize/payment";
import Paymentdone from "./Components/home/customize/paymentdone";
import Bag from "./Components/home/bag/bag";
import Carousel from "./Components/Tshirt/carousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Components/details/Details";
import Buy from "./Components/BuyingScreen/Buy";
// import Address from "../../backend/modals/Address";
import Addressmain from "./Components/Saved Addresses/Addressmain";
import Purchases from "./Components/Purchases/Purchases";
import Bagcheckout from "./Components/bagcheckout/Bagcheckout";
import Admin from "./Components/Admin/Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/car" element={<Carousel />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termsandcondition" element={<Terms />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/my-account" element={<Account />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/home/customize" element={<Customize />} />
          <Route path="/home/customize-frame" element={<Customizeframe />} />
          <Route path="/home/customize-mugs" element={<Customizemugs />} />
          <Route path="/home/customize-skins" element={<Customizeskins />} />
          <Route path="/home/customize/image" element={<Image />} />
          <Route path="/home/customize/image-frame" element={<Imageframe />} />
          <Route path="/home/customize/image-mugs" element={<Imagemugs />} />
          <Route path="/home/customize/image-skin" element={<Imageskin />} />
          <Route path="/home/customize/image/detail1" element={<Detail1 />} />
          <Route
            path="/home/customize/image/details-frame"
            element={<Detailsframe />}
          />
            <Route
            path="/admin"
            element={<Admin />}
          />
          <Route
            path="/home/customize/image/details-mugs"
            element={<Detailmugs />}
          />
          <Route
            path="/bcheckout"
            element={<Bagcheckout />}
          />

<Route
            path="/purchases"
            element={<Purchases/>}
          />


          <Route
            path="/home/customize/image/details-tshirt"
            element={<DetailsTshirt />}
          />
          <Route path="/home/customize/image/detail2" element={<Detail2 />} />
          <Route path="/home/customize/image/payment" element={<Payment />} />
          <Route
            path="/home/customize/image/payment-done"
            element={<Paymentdone />}
          />
          <Route path="/home/wishlist" element={<Wishlist />} />
          <Route path="/home/bag" element={<Bag />} />
          <Route path="/home/skins" element={<Skins />} />
          <Route path="/home/accessories" element={<Accsesories />} />
          <Route path="/home/Tshirt" element={<Tshirt />} />
          <Route path="/home/ear" element={<PhoneCover />} />
          <Route path="/home/phone-cover/hard-cover" element={<Hardcover />} />
          <Route
            path="/home/phone-cover/glass-cover"
            element={<Glasscover />}
          />
          <Route path="/home/phone-cover/soft-cover" element={<Softcover />} />
          {/* <Route path="/home/phone-cover/forlovers" element={<Forlovers />} /> */}
          <Route path="/home/phone-cover/polaroid" element={<Polaroid />} />
          <Route
            path="/home/phone-cover/stickercase"
            element={<Stickercases />}
          />
            <Route
            path="/details/:earsid"
            element={<Details/>}
          />
  <Route
            path="/addresses"
            element={<Addressmain/>}
          />


<Route
            path="/buy/:producid"
            element={<Buy/>}
          />
          
          <Route path="/home/phone-cover/aesthetic" element={<Aesthetic />} />
          <Route path="/home/phone-cover/anime" element={<Anime />} />
          <Route
            path="/home/phone-cover/chain-cases"
            element={<Chaincases />}
          />
          <Route
            path="/home/glass-cover/cover-image"
            element={<CoverImage />}
          />
          <Route
            path="/home/glass-cover/cover-image-tshirt"
            element={<CoverImageTshirt />}
          />
          <Route
            path="/home/accessories/pop-gripppers"
            element={<Popgrippers />}
          />
          <Route path="/home/accessories/pop-socket" element={<Popsocket />} />
          <Route path="/home/accessories/frames" element={<Frames />} />
          <Route path="/home/accessories/mugs" element={<Mugs />} />
          <Route path="/home/accessories/wallets" element={<Wallet />} />

          <Route path="/forgot-password" element={<Forgotpassword />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
