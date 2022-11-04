import { IoCallSharp } from "react-icons/io5";

const About = () => {
  return (
    <div className="rounded-div">
      <div className="px-3 py-8 md:py-10 lg:py-14">
        {/* Row 1 */}
        <div className="flex flex-col-reverse gap-5 lg:flex-row">
          <div className="grid grid-cols-4 grid-rows-2 gap-1">
            <div className="row-span-2 col-span-2">
              <img
                className="w-full h-full object-cover"
                src="https://images.squarespace-cdn.com/content/v1/5c76b1ff16b6407adcf96732/1624299511259-2AK334JFY575OEBZ7QSK/IMG_4071.jpg"
                alt=""
              />
            </div>
            <div className="col-span-2">
              <img
                className="w-full h-full object-cover"
                src="https://images.ctfassets.net/3s5io6mnxfqz/1rpUj0lbF4UraDAIt1eXjr/fbfa8beb2fde3a2686020165e983a7af/AdobeStock_357911175_2.jpeg"
                alt=""
              />
            </div>
            <div className="col-start-3">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="col-start-4">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="font-nunito space-y-3">
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 md:text-3xl">ABOUT</h3>
              <h3 className="text-2xl font-bold md:text-3xl">PHAYVANH RESTAURANT</h3>
            </div>
            <p className="md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis harum enim, earum beatae mollitia pariatur voluptates
              vitae quibusdam vero sint! Dolorum totam eos molestiae, iusto
              voluptates quibusdam quo ipsam architecto! Veritatis harum enim,
              earum beatae mollitia pariatur voluptates vitae quibusdam vero
              sint! Dolorum totam eos molestiae, iusto voluptates quibusdam quo
              ipsam architecto!
            </p>
            <div className="flex font-bold gap-5 text-xl md:text-2xl">
              <h2>Call</h2>
              <div className="flex items-center">
                <IoCallSharp />
                <h2>+10 378 483 586</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-14">
          <div className="mb-5">
            <h3 className="text-2xl font-bold font-nunito text-center md:text-3xl">
              <span className="text-yellow-500">Our</span> Chef
            </h3>
          </div>
          <div className="flex flex-col justify-center items-center gap-10 sm:flex-row md:justify-between sm:flex-wrap">
            <div className="text-center">
              <div className="w-[200px] h-[200px]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </div>
              <h3>John Doe</h3>
            </div>
            <div className="text-center">
              <div className="w-[200px] h-[200px]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
              </div>
              <h3>John Doe</h3>
            </div>
            <div className="text-center">
              <div className="w-[200px] h-[200px]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1592498536065-2285610c4f5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                />
              </div>
              <h3>John Doe</h3>
            </div>
            <div className="text-center">
              <div className="w-[200px] h-[200px]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://www.kindpng.com/picc/m/2-20401_chef-girl-girl-chef-hd-logo-hd-png.png"
                  alt=""
                />
              </div>
              <h3>John Doe</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
