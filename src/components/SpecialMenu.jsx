import Slider from "react-slick";
import { truncateText } from "../utils/stringhandler";

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
//     img: "https://firebasestorage.googleapis.com/v0/b/phayvanh-f4f13.appspot.com/o/1668780853758duck1.jpg?alt=media&token=c8736831-de23-4026-af43-6bb03287dd91",
//   },
// ];

const SpecialMenu = ({ foods, loading }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="rounded-div bg-white px-3 py-8 md:py-10 lg:py-14">
      <div className="text-black space-y-3 font-nunito lg:space-y-6">
        <h3 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">
          <span className="text-yellow-500">SPECIAL</span> MENU
        </h3>
        <p className="otext-md text-center md:text-lg lg:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the printing and typesetting industry.
          Lorem Ipsum has been
        </p>

        {/* slider */}
        <div className="">
          <Slider className="overflow-x-clip" {...settings}>
            {foods && foods.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden w-auto h-[500px]"
              >
                <div className="absolute w-full h-full top-0 left-0 bg-black/40"></div>
                <div className="flex flex-col p-3 items-center justify-center absolute w-full h-full">
                  <h3 className="text-white text-4xl text-center font-bold">
                    ${item.price}
                  </h3>
                  <p className="text-white text-lg text-center">
                    {truncateText(item.description,20,0,80)}
                  </p>
                </div>
                <img
                  // className="absolute inset-0 w-full h-full z-[-1] transition-all group-hover:scale-110"
                  className="absolute top-0 left-0 z-[-1] w-full h-full object-cover transition-all group-hover:scale-110"
                  src={item.img}
                  alt="/"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;