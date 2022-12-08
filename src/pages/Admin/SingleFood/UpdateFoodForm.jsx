import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../../firebase";
import { IoMdCloudUpload } from "react-icons/io";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { TiArrowLeftThick } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";
import { isImage } from "../../../helper/functions";

const UpdateFoodForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [cate, setCate] = useState("");
  const [file, setFile] = useState("");
  const [cur_img, setCurImg] = useState("");
  const [cur_imgName, setCurImgName] = useState("");
  const [uploadedImg, setUploadedImg] = useState({});
  const [per, setPerc] = useState(null);

  //UPLOAD FILE TO STORAGE
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
            setUploadedImg({ img: downloadURL, img_name: fileName });
          });
          setCurImg("");
        }
      );
    };

    file && uploadFile();
  }, [file]);

  // GET FOOD BY ID
  useEffect(() => {
    const getFood = async () => {
      const docRef = doc(db, "foods", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTitle(docSnap.data()?.title);
        setDesc(docSnap.data()?.description);
        setPrice(docSnap.data()?.price);
        setCate(docSnap.data()?.category);
        setCurImg(docSnap.data()?.img);
        setCurImgName(docSnap.data()?.img_name);
      } else {
        console.log("No such document!");
      }
    };

    getFood();
  }, [id]);

  // GET CATES DATA
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

  const handleDeleteCurImg = async () => {
    try {
      const desertRef = ref(storage, cur_imgName);
      deleteObject(desertRef)
        .then(() => {
          // File deleted successfully
          setCurImg("");
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
          console.log(error);
          setCurImg("");
        });
    } catch (err) {
      console.log(err);
      setCurImg("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    // if (!file || !data.title || !data.category || !data.price) {
    //   setIsEmpty(true)
    //   setIsLoading(false)
    // }
    // else {
    try {
      const updateDocRef = doc(db, "foods", id);
      await updateDoc(updateDocRef, {
        title: title,
        description: desc,
        price: price,
        category: cate,
        img: uploadedImg.img || cur_img,
        img_name: uploadedImg.img_name || cur_imgName,
      });
      // await addDoc(collection(db, "foods"), {
      //   ...data,
      //   timeStamp: serverTimestamp(),
      // });
      // setIsEmpty(false)
      // setIsLoading(false);

      navigate(-1);
    } catch (err) {
      console.log(err);
      // setIsEmpty(false)
      // setIsLoading(false);
    }
    // }
  };

  return (
    // <>
    // </>
    <div className="relative border shadow-lg p-5 mt-5 md:flex md:justify-evenly md:gap-5 md:items-center">
      <div className="relative w-auto sm:w-[400px] mb-2">
        {/* <div className="relative w-auto mb-2"> */}
        {cur_img ? (
          <img
            className="w-full h-full object-cover border-2"
            src={
              cur_img
                ? cur_img
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt="Img not found"
          />
        ) : (
          <img
            className="w-full h-full object-cover border-2 border-lime-300"
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt="Img not found"
          />
        )}
        <div
          className={`${
            cur_img || file ? "flex" : "hidden"
          } cursor-pointer group p-2 bg-white shadow-xl border border-gray-200 rounded-full absolute top-1 right-1`}
        >
          <RiDeleteBin5Line
            onClick={handleDeleteCurImg}
            className="text-red-500 text-xl transition group-hover:scale-125"
          ></RiDeleteBin5Line>
        </div>
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

          <div className="flex flex-col gap-1">
            <label>Title</label>
            <input
              id="title"
              className="text-sm border p-2 rounded-md"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Desc</label>
            <textarea
              id="desc"
              className="text-sm border p-2 rounded-md"
              // type='text'
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Price</label>
            <input
              id="price"
              className="text-sm border p-2 rounded-md"
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <select
              onChange={(e) => setCate(e.target.value)}
              value={cate}
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {categories.map((cate) => (
                <option key={cate.id} value={cate.category}>
                  {cate.category.charAt(0).toUpperCase() +
                    cate.category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* {foodInputs.map(({ id, label, type, placeholder }) => (
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
                <select
                  onChange={handleSelect}
                  // defaultValue={category}
                  id="category" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  {categories.map(cate => (
                    <option key={cate.id} value={cate.category}>{cate.category.charAt(0).toUpperCase()
                      + cate.category.slice(1)}</option>
                  ))}
                </select>
              )}
            </div>
          ))} */}

          <button
            type="submit"
            // disabled={(per !== null && per) < 100 ? false : true}
            className="cursor-pointer bg-green-500 transition hover:bg-green-400 text-white px-2 py-2 rounded-md disabled:opacity-50 disabled:cursor-wait"
          >
            Update
          </button>
          {/* {isEmpty ? <span className="text-red-500">Please fill all required field!</span> : ''} */}
        </form>
      </div>

      {/* Loading Modal */}
      {/* {isLoading &&
     <Spinner/>
    } */}
    </div>
  );
};

export default UpdateFoodForm;
