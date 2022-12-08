import React from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import Topbar from "../../../components/Topbar";
import UpdateFoodForm from "./UpdateFoodForm";

const SingleFood = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      {/* Right side content */}
      <div className="w-full overflow-hidden p-5">
        <Topbar />
        <div className="w-fit mt-2">
          <Link to="/admin/foodlist" className="">
            <TiArrowLeftThick className="text-3xl" />
          </Link>
        </div>
        <UpdateFoodForm />
      </div>
    </div>
  );
};

export default SingleFood;
