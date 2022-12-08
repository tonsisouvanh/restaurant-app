import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, getStorage, ref } from "firebase/storage";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FoodContext } from "../context/FoodContext";
import { db } from "../firebase";
import Modal from "./Modal";

const FoodCard = ({ food }) => {
  const { dispatch } = useContext(FoodContext);
  const idFoodRef = useRef();
  const imgNameRef = useRef();
  const [modal, setModal] = useState({
    isLoading: false,
    id: "",
    img_name: "",
  });
  const storage = getStorage();

  const handleModal = (isLoading, id, img_name) => {
    setModal({
      isLoading,
      id,
      img_name,
    });
  };

  const handleDelete = (id, img_name) => {
    handleModal(true, id, img_name);
    idFoodRef.current = id;
    imgNameRef.current = img_name;
  };

  // Handle removing item
  const areUSureDelete = async (choose) => {
    if (choose) {
      const id = idFoodRef.current;
      const img = imgNameRef.current;
      try {
        const desertRef = ref(storage, img);
        deleteObject(desertRef)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });

        await deleteDoc(doc(db, "foods", id));
        dispatch({ type: "DELETEFOOD", id: id });
        // setData(data.filter((item) => item.id !== id));
        handleModal(false, "", "");
      } catch (err) {
        console.log(err);
        handleModal(false, "", "");
      }
    } else {
      handleModal(false, "", "");
    }
  };

  return (
    <div className="border rounded-md shadow-lg overflow-hidden">
      <div className="w-full h-auto">
        <img
          className="w-full h-full object-cover"
          src={food.img}
          alt="no img"
        />
      </div>
      <div className="p-3 text-~sm flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3>{food.title}</h3>
          <h3>${food.price}</h3>
        </div>
        <p>{food.desc}</p>
        <div className="space-x-2">
          <Link to={`/admin/food/${food.id}`}>
            <button className="text-white rounded-md bg-gray-700 px-3 py-1">
              View
            </button>
          </Link>
          <button
            onClick={() => handleDelete(food.id, food.img_name)}
            className="text-white rounded-md bg-red-500 px-3 py-1"
          >
            Delete
          </button>
        </div>
      </div>
      {modal.isLoading && (
        <Modal
          title={"Remove food"}
          message={"Are you sure you want to remove this item"}
          cancel_msg={"Cancel"}
          onModal={areUSureDelete}
          isLoading={modal.isLoading}
        />
      )}
    </div>
  );
};

export default FoodCard;
