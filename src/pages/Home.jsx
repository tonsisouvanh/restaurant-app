import About from "../components/About";
import Footer from "../components/Footer";
import GallerySlider from "../components/GallerySlider";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import OurMenu from "../components/OurMenu";
import SpecialMenu from "../components/SpecialMenu";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase";
import { FoodContext } from "../context/FoodContext";
import { useContext } from "react";

const Home = () => {
  const { foods, dispatch, loading } = useContext(FoodContext);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const listingRef = collection(db, "foods");
        const q = query(listingRef);
        const querySnap = await getDocs(q);

        const foodData = [];
        querySnap.docs.forEach((doc) => {
          return foodData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        dispatch({ type: "FETCHFOODS", payload: foodData });
      } catch (error) {
        console.log("Could not fetch listing");
      }
    };
    fetchFoods();
  }, [dispatch]);

  return (
    <>
        <Navbar />
        <Main />
        <SpecialMenu foods={foods} loading={loading} />
        <OurMenu foods={foods} loading={loading} />
        <About foods={foods} loading={loading} />
        <GallerySlider foods={foods} loading={loading} />
        <Footer foods={foods} loading={loading} />
    </>
  );
};

export default Home;
