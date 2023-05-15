import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FoodCard from "../../components/FoodCard";
import FoodTable from "../../components/FoodTable";
import FullSpinner from "../../components/FullSpinner";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { FoodContext } from "../../context/FoodContext";
import { db } from "../../firebase";

const FoodList = () => {
  const { foods, loading, dispatch } = useContext(FoodContext);
  
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

  console.log(foods);

  if (loading) {
    return <FullSpinner />;
  }
  return (
    <div className="flex w-full relative">
      <Sidebar />

      {/* Right side content */}
      <div className="w-full overflow-hidden p-5">
        <Topbar />
        <div className="mt-5 w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-2xl text-gray-500 font-bold whitespace-nowrap">
              All Foods
            </h2>
            <Link to="/admin/addfood">
              <button className="bg-blue-500 text-white px-6 py-1 rounded-md whitespace-nowrap">
                Add food
              </button>
            </Link>
          </div>

          {/* food cards */}
          <div className="mt-5 flex flex-col gap-5 md:hidden">
            {foods && foods.map((food) => <FoodCard key={food.id} food={food} />)}
          </div>

          {/* table */}
          <div className="hidden md:block">
            <FoodTable foods={foods} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
