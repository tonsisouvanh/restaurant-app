import React from "react";
import Sidebar from "../../../components/Sidebar";
import Topbar from "../../../components/Topbar";
import AddFoodForm from "./AddFoodForm";


const AddFood = ({foodInputs}) => {

  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        {/* Right side content */}
        <div className="w-full overflow-hidden p-5">
          <Topbar />
          <AddFoodForm foodInputs={foodInputs} />
        </div>
      </div>
    </>
  );
};

export default AddFood;
