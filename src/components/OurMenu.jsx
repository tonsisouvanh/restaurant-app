import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type Food = {
  id: number;
  url: string;
};

const foods: Food[] = [
  {
    id: 0,
    url: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1627308595186-e6bb36712645?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1637806930600-37fa8892069d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

// interface CustomArrow {
//   className: string;
//   style: object;
//   onClick: React.MouseEventHandler<HTMLElement>;
// }

function OurMenu() {
  // function SampleNextArrow(props: CustomArrow) {
  //   const { className, style, onClick } = props;

  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "absolute",
  //         backgroundColor: "transparent",
  //         right: "0",
  //         top: "0",
  //         zIndex: 10,
  //         opacity: "0.8",
  //       }}
  //       onClick={onClick}
  //     >
  //       <MdChevronRight size={50} className="" color={"white"} />
  //     </div>
  //   );
  // }

  // function SamplePrevArrow(props: CustomArrow) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "absolute",
  //         backgroundColor: "transparent",
  //         left: "-10px",
  //         top: "40%",
  //         zIndex: 10,
  //         opacity: "0.8",
  //       }}
  //       onClick={onClick}
  //     >
  //       <MdChevronLeft size={50} className="" color={"white"} />
  //     </div>
  //   );
  // }

  // var settings: object = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   // nextArrow: <SampleNextArrow className="" style={{}} onClick={() => {}} />,
  //   // prevArrow: <SamplePrevArrow className="" style={{}} onClick={() => {}} />,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //   ],
  // };

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
              <li className="cursor-pointer font-bold text-white bg-yellow-500 py-1 px-3 rounded-full hover:text-gray-200">
                Breakfast
              </li>
              <li className="cursor-pointer hover:text-gray-200">Lunch</li>
              <li className="cursor-pointer hover:text-gray-200">Dinner</li>
              <li className="cursor-pointer hover:text-gray-200">Drink</li>
              <li className="cursor-pointer hover:text-gray-200">Desserts</li>
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
              {foods.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-xl bg-[#232830] border-white border-2 transition-all hover:scale-[1.03]">
                  <div className="w-auto border-b-8 border-yellow-500 h-[300px] lg:h-[230px] overflow-hidden rounded-bl-[4rem]">
                    <img className="w-full h-full object-cover" src={item.url} alt="" />
                  </div>
                  <div className="flex flex-col gap-3 p-5">
                    <h3 className="font-bold text-lg">Delicious Pizza</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla mollitia iste veniam</p>
                    <div className="w-full flex items-center justify-between">
                      <span>$18</span>
                      <div className="bg-yellow-500 p-1.5 rounded-full cursor-pointer">
                        <CgShoppingCart />
                      </div>
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
