import About from "../components/About";
import Footer from "../components/Footer";
import GallerySlider from "../components/GallerySlider";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import OurMenu from "../components/OurMenu";
import SpecialMenu from "../components/SpecialMenu";
import { FoodContextApi } from "../context/FoodContext";

const Home = () => {
  const { foods, loading } = FoodContextApi();

  return (
    <>
      <Navbar />
      <Main />
      <SpecialMenu foods={foods} loading={loading}/>
      <OurMenu foods={foods} loading={loading} />
      <About foods={foods} loading={loading} />
      <GallerySlider foods={foods} loading={loading} />
      <Footer foods={foods} loading={loading} />
    </>
  );
};

export default Home;
