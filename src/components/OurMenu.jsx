import React, { useEffect } from "react";
import { useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import FullSpinner from "./FullSpinner";
import { truncateText } from "../utils/stringhandler";
import { useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
// const foods = [
//   {
//     id: 0,
//     img: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 1,
//     img: "https://images.unsplash.com/photo-1627308595186-e6bb36712645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
//   },
//   {
//     id: 2,
//     img: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
//   },
//   {
//     id: 3,
//     img: "https://images.unsplash.com/photo-1637806930600-37fa8892069d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
//   },
//   {
//     id: 4,
//     img: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 5,
//     img: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 6,
//     img: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 7,
//     img: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
//   },
// ];

function OurMenu({ foods, loading }) {
  const [categories, setCategories] = useState([]);
  const [cateFilter, setCateFilter] = useState();
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const listingRef = collection(db, "categories");
        const q = query(listingRef);
        const querySnap = await getDocs(q);

        const cateData = [];
        querySnap.docs.forEach((doc) => {
          return cateData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setCategories(cateData);
      } catch (error) {
        console.log("Could not fetch listing");
      }
    };
    fetchFoods();
  }, []);


  if (loading) {
    return <FullSpinner />;
  }

  return (
    <div className="relative bg-menu-background w-full bg-cover bg-no-repeat">
      <div className="rounded-div px-3 py-8 md:py-10 lg:py-14">
        <div className="text-white space-y-3 font-nunito lg:space-y-6">
          <h3 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">
            <span className="text-yellow-500">OUR</span> MENU
          </h3>
          <p className="text-md text-center md:text-lg lg:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the printing and typesetting
            industry. Lorem Ipsum has been
          </p>

          {/* slider */}
          <div className="space-y-5">
            <ul className="flex flex-col gap-3 mb-10 items-center justify-center sm:flex-row sm:gap-5 md:gap-14 lg:gap-20 md:text-lg">
              {categories.map((cate) => (
                <li
                  key={cate.id}
                  className="cursor-pointer hover:text-gray-200"
                >
                  {cate.category}
                </li>
              ))}
            </ul>

            {/* Slider menu */}
            {/* <Slider className="overflow-x-clip" {...settings}>
              {foods.map((item) => (
                <div className="space-y-3 bg-white text-black p-3 rounded-lg shadow-lg">
                  <div className="w-[100px] h-[100px] mx-auto">
                    <img
                      className="w-full h-full rounded-full object-cover"
                      src={item.url}
                      alt=""
                    />
                  </div>
                  <h3 className="text-center">Fried Chicken</h3>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                
              ))}
            </Slider> */}

            {/* Grid menu */}
            <div className="grid grid-cols-1 gap-6 grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {foods &&
                foods.map((item) => (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-xl bg-[#232830] border-white border-2 transition-all hover:scale-[1.03]"
                  >
                    <div className="w-full border-b-8 border-yellow-500 h-[300px] lg:h-[230px] overflow-hidden rounded-bl-[4rem]">
                      <img
                        className="w-full h-full object-cover"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    {/* <div className="h-full border flex flex-col gap-3 p-5"> */}
                    <div className="border w-full flex flex-col gap-3 p-3">
                      <h3 className="font-bold text-lg h-[60px]">
                        {item.title}
                      </h3>
                      <p className="text-sm h-[90px]">
                        {truncateText(item.description, 20, 0, 100)}
                      </p>
                      <div className="w-full flex items-center justify-between">
                        <span className="text-yellow-400 font-bold text-lg">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMenu;
