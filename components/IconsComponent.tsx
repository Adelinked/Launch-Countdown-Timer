import { FaFacebookSquare, FaPinterest, FaInstagram } from "react-icons/fa";
const IconsComponent = () => {
  return (
    <div className="flex hillsBackgroud gap-8 mt-40 sm:mt-36 h-44 sm:h-52 w-full justify-center items-center text-3xl text-grayishBleu">
      <FaFacebookSquare className=" hover:text-softRed cursor-pointer background" />
      <FaPinterest className="hover:text-softRed  cursor-pointer  " />
      <FaInstagram className="hover:text-softRed cursor-pointer " />
    </div>
  );
};

export default IconsComponent;
