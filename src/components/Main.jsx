const Main = () => {
  return (
    <div
      className="
    relative
    w-full
    h-[100vh]
    bg-main-background
    bg-cover
    bg-no-repeat
    bg-center
    "
    >
      <div
        className="
      absolute 
      top-0 left-0
      w-full h-full
      bg-gradient-to-b 
      from-black"
      ></div>
      {/* <div className="w-full h-[110vh]">
        <img className="w-full h-full object-cover" src={bgimg} alt="" />
      </div> */}
      {/* Welcome section */}
      <div className="rounded-div w-full h-full font-nunito px-3 flex items-center justify-center">
        <div className="flex flex-col gap-6 text-white px-10 py-12 z-[1] rounded-md bg-black/50">
          <div className="font-bold w-full flex flex-col gap-4 md:gap-5 items-center justify-center">
            <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="text-yellow-500">Welcome</span> to Lao - Thai
              Restaurant
            </h2>
            <h3 className="text-center text-md md:text-xl lg:text-2xl">
              Meet, Eat & Enjoy the Lao - Thai taste
            </h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="h-[2px] w-full bg-yellow-500"></div>
            <h4 className="whitespace-nowrap mx-2">LAO - THAI FLAVOURS</h4>
            <div className="h-[2px] w-full bg-yellow-500"></div>
          </div>

          <div className="text-center cursor-pointer">
            <button className="bg-yellow-500 md:text-lg mt-8 hover:bg-yellow-600 rounded-md py-3 px-4">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Main;