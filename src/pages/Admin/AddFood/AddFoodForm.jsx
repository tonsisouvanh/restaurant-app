import React, { useEffect, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import {
  serverTimestamp,
  addDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";

import { db, storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AiFillPlusCircle } from "react-icons/ai";
import AddCategoryModal from "../../../components/AddCategoryModal";
import Spinner from "../../../components/Spinner";

const AddFoodForm = ({ foodInputs }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [file, setFile] = useState("");
  const [per, setPerc] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    price: 0,
    category: "",
    img_name: "",
    description: "",
    img: "",
  });
  const [categories, setCategories] = useState([]);
  const [openAddCate, setOpenAddCate] = useState(false);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  useEffect(() => {
    const uploadFile = () => {
      const fileName = new Date().getTime() + file.name;

      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({
              ...prev,
              img: downloadURL,
              img_name: fileName,
            }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  // GET CATGORIES DATA
  useEffect(() => {
    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, "categories"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setCategories(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    setIsLoading(true);
    if (!data.title || !data.category || !data.price) {
      setIsEmpty(true)
      setIsLoading(false)
    }
    else {
      try {
        await addDoc(collection(db, "foods"), {
          ...data,
          timeStamp: serverTimestamp(),
        });

        setIsEmpty(false)
        setIsLoading(false);

        navigate(-1)
      } catch (err) {
        console.log(err);
        setIsEmpty(false)
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="relative border shadow-lg p-5 mt-5 md:flex md:justify-evenly md:gap-5 md:items-center">
      <div className="w-[400px] mb-2">
        <img
          className="w-full h-full object-cover"
          src={
            file
              ? URL.createObjectURL(file)
              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          }
          alt="No Img"
        />
      </div>

      <div className="md:w-[500px]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
          <div className="cursor-pointer border-2 rounded-md border-sky-200 px-2 py-1 w-fit">
            <div className="flex items-center gap-1">
              <label className="cursor-pointer" htmlFor="file">
                Upload Image
              </label>
              <IoMdCloudUpload className="text-xl" />
            </div>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>

          {foodInputs.map(({ id, label, type, placeholder }) => (
            <div className="flex flex-col gap-1" key={id}>
              {id === "category" ? (
                <div className="flex items-center gap-3">
                  <label className="text-gray-600 font-bold">{label}</label>
                  <div
                    onClick={() => setOpenAddCate(true)}
                    className="bg-blue-400 cursor-pointer px-2 py-1 gap-1 text-white rounded-md flex items-center transition hover:bg-blue-600"
                  >
                    <span className="text-xs">New category</span>{" "}
                    <AiFillPlusCircle />
                  </div>
                </div>
              ) : (
                <label className="text-gray-600 font-bold">{label}</label>
              )}
              {id !== "category" ? (
                <input
                  id={id}
                  className="text-sm border p-2 rounded-md"
                  type={type}
                  placeholder={placeholder}
                  onChange={handleInput}
                />
              ) : (
                <select
                  onChange={handleInput}
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="empty"></option>
                  {categories.map((cate) => (
                    <option key={cate.id} value={cate.category}>
                      {cate.category.charAt(0).toUpperCase() +
                        cate.category.slice(1)}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}
          <button
            disabled={per !== null && per < 100 ? true : false}
            className="cursor-pointer bg-green-500 transition hover:bg-green-400 text-white px-2 py-2 rounded-md disabled:opacity-50 disabled:cursor-wait"
          >
            ADD
          </button>
          {isEmpty ? (
            <span className="text-red-500">
              Please fill all required field!
            </span>
          ) : (
            ""
          )}
        </form>
      </div>

      {/* Loading Modal */}
      {isLoading && <Spinner />}

      {/* Add Category Modal */}
      {openAddCate && (
        <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 bg-black/30">
          <AddCategoryModal setOpenAddCate={setOpenAddCate} />
        </div>
      )}
    </div>
  );
};

export default AddFoodForm;
