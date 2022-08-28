import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <>
      <Header />
      <div className="Home">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Banner"
          className="home_img"
        />
        {/* Product id , title,Price,rating,img */}
        <div className="home_row">
          <Product
            id={1234}
            title={
              "CHAFON RGB Gaming Headset with Mic for Xbox One, PS4, PS5, Over-Ear Headphones with Stereo Surround"
            }
            Price={21.92}
            rating={5}
            img={
              "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            }
          />
          <Product
            id={1235}
            title={
              "BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear"
            }
            Price={56.41}
            rating={4}
            img={
              "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <Product
            id={1236}
            title={
              "Razer Huntsman V2 Optical Gaming Keyboard: Fastest Linear Optical Switches Gen-2 w/Sound Dampeners &"
            }
            Price={10.11}
            rating={3}
            img={
              "https://m.media-amazon.com/images/I/71xiaUDxklL._AC_UY218_.jpg"
            }
          />
          <Product
            id={1237}
            title={
              'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)'
            }
            Price={135.0}
            rating={2}
            img={
              "https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX450_.jpg"
            }
          />
          <Product
            id={1238}
            title={
              "Transformers Generations Legacy Wreck ‘N Rule Collection Diaclone Universe Twin Twist, Amazon Exclusive, Ages 8 and Up, 5.5-inch"
            }
            Price={24.99}
            rating={5}
            img={
              "https://m.media-amazon.com/images/I/71uclpp0POL._AC_SX425_.jpg"
            }
          />
        </div>
        <div className="home_row">
          <Product
            id={1239}
            title={
              "I Love You to the Moon and Back Board book – Illustrated, March 3, 2015"
            }
            Price={4.31}
            rating={4}
            img={
              "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Home;
