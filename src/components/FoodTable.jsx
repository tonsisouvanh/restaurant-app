import React, { useEffect, useRef, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import { getStorage, ref, deleteObject } from "firebase/storage";
import Modal from "./Modal";

const FoodTable = () => {
  const idFoodRef = useRef();
  const imgNameRef = useRef();
  const [modal, setModal] = useState({
    isLoading: false,
    id: "",
    img_name: "",
  });


  const handleModal = (isLoading, id, img_name) => {
    setModal({
      isLoading,
      id,
      img_name
    });
  };

  const handleDelete = (id, img_name) => {
    handleModal(true, id, img_name);
    idFoodRef.current = id;
    imgNameRef.current = img_name;
  };

  const areUSureDelete = async (choose) => {
    if (choose) {
      console.log(choose, idFoodRef.current, imgNameRef.current)
      const id = idFoodRef.current;
      const img = imgNameRef.current;
      try {
        const desertRef = ref(storage, img);
        deleteObject(desertRef).then(() => {
          // File deleted successfully
        }).catch((error) => {
          // Uh-oh, an error occurred!
          console.log(error)
        });

        await deleteDoc(doc(db, "foods", id));
        setData(data.filter((item) => item.id !== id));
        handleModal(false, '', '');

      } catch (err) {
        console.log(err);
        handleModal(false, '', '');
      }
    } else {
      handleModal(false, '', '');
    }
  };

  const [data, setData] = useState([]);
  const storage = getStorage();


  useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "foods"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //     console.log(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, "foods"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);


  return (
    <>
      <table className="min-w-full text-center mt-3">
        <thead className="border-b bg-gray-800">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4"
            >
              Title
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4"
            >
              Description
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4"
            >
              Price
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4"
            >
              Category
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4"
            >
              Image
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id} className="bg-white border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {item.title}
              </td>
              <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                {item.description}
              </td>
              <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                {item.price}
              </td>
              <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                {item.category}
              </td>
              <td className="text-sm flex justify-center text-gray-900 px-6 py-4 whitespace-nowrap">
                <div className="w-[100px]">
                  <img
                    className="w-full h-full object-cover"
                    src={item.img}
                    alt=""
                  />
                </div>
              </td>
              <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                <div className="space-x-2">
                  <button className="text-white rounded-md bg-gray-700 px-3 py-1">
                    View
                  </button>
                  <button onClick={() => handleDelete(item.id, item.img_name)} className="text-white rounded-md bg-red-500 px-3 py-1">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modal.isLoading && (
        <Modal
          title={"Remove food"} message={"Are you sure you want to remove this item"} cancel_msg={"Cancel"} onModal={areUSureDelete}
          isLoading={modal.isLoading}
        />
      )}
    </>
  );
};

export default FoodTable;
