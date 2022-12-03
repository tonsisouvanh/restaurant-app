import React from "react";

const FoodCard = () => {
  return (
    <div className="border rounded-md shadow-lg overflow-hidden">
      <div className="w-full h-[150px] sm:h-[300px]">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1618449840665-9ed506d73a34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
      <div className="p-3 text-~sm flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3>Fried Egg</h3>
          <h3>$200</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <div className="space-x-2">
          <button className="text-white text-sm rounded-md bg-gray-700 px-3 py-1">
            View
          </button>
          <button className="text-white text-sm rounded-md bg-red-500 px-3 py-1">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
