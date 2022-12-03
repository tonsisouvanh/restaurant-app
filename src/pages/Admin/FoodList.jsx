import React from "react";
import { Link } from "react-router-dom";
import FoodCard from "../../components/FoodCard";
import FoodTable from "../../components/FoodTable";
import FullSpinner from "../../components/FullSpinner";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { FoodContextApi } from "../../context/FoodContext";




const FoodList = () => {
  const {foods, loading} = FoodContextApi();

  if(loading){
    return <FullSpinner/>
  }

  return (
    <div className="flex w-full">
      <Sidebar />

      {/* Right side content */}
      <div className="w-full overflow-hidden p-5">
        <Topbar />
        <div className="mt-5 w-full">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-2xl text-gray-500 font-bold">All Foods</h2>
            <Link to="/admin/addfood">
              <button className="bg-blue-500 text-white px-6 py-1 rounded-md">
                Add food
              </button>
            </Link>
          </div>

          {/* food cards */}
          <div className="mt-5 flex flex-col gap-5 md:hidden">
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </div>

          {/* table */}
          <div className="hidden md:block">
            <FoodTable foods={foods} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodList;
