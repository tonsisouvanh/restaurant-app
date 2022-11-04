import { TiSocialInstagram } from "react-icons/ti";
import { BsFacebook, BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const headerStyle: string = "text-xl font-bold lg:text-lg";

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <div className="rounded-div text-white px-3 py-10">
        <div className="grid grid-cols-1 grid-flow-row content center gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* PHAYVANH. */}
          <div className="self-start w-full h-auto gap-5 flex flex-col items-center justify-center">
            <h2 className={headerStyle}>PHAYVANH.</h2>
            <p className="text-center lg:text-left">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove
            </p>
            <div className="flex gap-3 items-center">
              <TiSocialInstagram className="text-[2.4rem]" />
              <BsFacebook className="text-3xl" />
              <BsTwitter className="text-3xl" />
            </div>
          </div>

          {/* OPEN HOURS */}
          <div className="self-start w-full h-auto gap-5 flex flex-col items-center justify-center">
            <h2 className={headerStyle}>OPEN HOURS</h2>
            <ul className="w-full">
              <li className="flex justify-between">
                <span>Monday</span>
                <span>9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span>
                <span>9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday</span>
                <span>9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday</span>
                <span>9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 - 24:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>9:00 - 24:00</span>
              </li>
            </ul>
          </div>

          {/* GALLERY */}
          <div className="self-start w-full h-auto gap-5 flex flex-col items-center justify-center">
            <h2 className={headerStyle}>GALLERY</h2>
            <div className="grid grid-cols-2 gap-1">
              <div className="w-full h-[100px]">
                <img
                  className="w-full h-full object-fit-cover"
                  src="https://www.seriouseats.com/thmb/QacghgdVR86YleHBLRLkpTRYD_8=/1500x1125/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__05__20180503-Guide-to-Lao-Food-Laab-Ped-Jai-Williams-1500x1125-156c9f763ed5416e9d9f355e3ffd1c21.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-[100px]">
                <img
                  className="w-full h-full object-fit-cover"
                  src="https://www.laos-guide-999.com/images/Lao-food-kaopoon.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-[100px]">
                <img
                  className="w-full h-full object-fit-cover"
                  src="https://laostravel.com/images/2020/12/Lao-Sausage-Sai-Oua.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-[100px]">
                <img
                  className="w-full h-full object-fit-cover"
                  src="https://laostravel.com/images/2020/12/Lao-Sausage-Sai-Oua.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-[100px]">
                <img
                  className="w-full h-full object-fit-cover"
                  src="https://laostravel.com/images/2020/12/Lao-Sausage-Sai-Oua.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-[100px]">
                <img
                  className="w-full h-full object-fit-cover"
                  src="https://laostravel.com/images/2020/12/Lao-Sausage-Sai-Oua.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-[100px]">
                <img
                  className="w-full h-full object-fit-cover"
                  src="https://laostravel.com/images/2020/12/Lao-Sausage-Sai-Oua.jpg"
                  alt=""
                />
              </div>
              <div className="w-full h-[100px]">
                <img
                  className="w-full h-full object-fit-cover"
                  src="https://laostravel.com/images/2020/12/Lao-Sausage-Sai-Oua.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* CONTACT US */}
          <div className="self-start w-full h-auto gap-5 flex flex-col">
            <h2 className="text-xl font-bold text-center lg:text-lg">
              CONTACT US
            </h2>
            <div className="space-y-3">
              <div className="flex gap-4 items-center">
                <MdEmail className="text-lg" />
                <span>contact@hotmail.com</span>
              </div>
              <div className="flex gap-4 items-center">
                <BsFillTelephoneFill className="text-lg" />
                <span>+ 10 378 483 6782</span>
              </div>
              <div className="flex gap-4 items-start">
                <IoLocationSharp className="text-3xl" />
                <span>34 Street Name, City Name Here, United States</span>
              </div>
            </div>
            <div>
              <img
                src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <p className="w-full text-center mt-16">
          Copyright ©2022 All rights reserved | This content website is made by
          DevTons
        </p>
      </div>
    </div>
  );
};

export default Footer;
