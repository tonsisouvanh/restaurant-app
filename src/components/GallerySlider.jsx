import Slider from "react-slick";
// import './style.css'


const foods = [
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
    url: "https://www.seriouseats.com/thmb/QacghgdVR86YleHBLRLkpTRYD_8=/1500x1125/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Laab-Ped-Jai-Williams-1500x1125-156c9f763ed5416e9d9f355e3ffd1c21.jpg",
  },
  {
    id: 5,
    url: "https://www.laos-guide-999.com/images/Lao-food-kaopoon.jpg",
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

const GallerySlider = () => {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    pauseOnHover: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 50,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <>
      <div className="bg-gray-100 border overflow-x-hidden px-3 py-8 md:py-10 lg:py-14">
        <div className="rounded-div mb-8">
          <div className="text-black space-y-3 font-nunito lg:space-y-6">
            <h3 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">
              <span className="text-yellow-500">RESTAURANT</span> GALLERY
            </h3>
          </div>
        </div>
        {/* slider */}
        <div className="">
          <Slider className="overflow-x-clip" {...settings}>
            {foods.map((item) => (
              <div key={item.id} className="overflow-hidden w-auto h-[220px] mx-0">
                <img
                  className="w-full h-full object-cover transition-all hover:scale-110"
                  src={item.url}
                  alt="/"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default GallerySlider;
