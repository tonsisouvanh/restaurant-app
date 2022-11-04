import React, { useEffect, useState } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

import {
  // addDoc,
  // collection,
  // doc,
  serverTimestamp,
  // setDoc,
  addDoc,
  collection
} from "firebase/firestore";

import { db, storage } from "../../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const AddFoodForm = ({ foodInputs }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [file, setFile] = useState("");
  const [per, setPerc] = useState(null);
  const navigate = useNavigate()

  const [data, setData] = useState({});



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
            setData((prev) => ({ ...prev, img: downloadURL, img_name: fileName }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);




  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!file || !data.title || !data.category || !data.price) {
      setIsEmpty(true)
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
  }



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
              <label>{label}</label>
              {id !== "category" ? (
                <input
                  id={id}
                  className="text-sm border p-2 rounded-md"
                  type={type}
                  placeholder={placeholder}
                  onChange={handleInput}
                />

              ) : (
                <select onChange={handleInput} id="category" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="empty"></option>
                  <option value="desserts">Desserts</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="dinner">Dinner</option>
                  <option value="lunch">Lunch</option>
                </select>
              )}
            </div>
          ))}
          <button disabled={per !== null && per < 100 ? true : false} className="cursor-pointer bg-green-500 transition hover:bg-green-400 text-white px-2 py-2 rounded-md disabled:opacity-50 disabled:cursor-wait">
            ADD
          </button>
          {isEmpty ? <span className="text-red-500">Please fill all required field!</span> : ''}
        </form>
      </div>

      {/* Loading Modal */}
      {isLoading &&
        <div className='w-full h-full flex items-center justify-center absolute top-0 left-0 bg-black/50' role="status">
          <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      }
    </div>
  );
};

export default AddFoodForm;
