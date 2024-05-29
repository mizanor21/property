import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import { TbWorldCheck } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";

const NavContact = () => {
  return (
    <div className="bg-green-700">
      <div className=" text-white lg:flex justify-between hidden container mx-auto">
        <div className=" flex gap-3 items-center">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className="flex gap-5">
          <span className="flex items-center gap-2">
            <MdWifiCalling3 />
            <a href="tel:+88 01925 507 436" className="link-hover">
              +88 01925 507 436
            </a>
            <span>(BD)</span>
          </span>
          <span className="flex items-center gap-2">
            <MdWifiCalling3 />
            <a href="tel:+971525709908" className="link-hover">
              +971525709908
            </a>
            <span>(UAE)</span>
          </span>
          <span className="flex items-center gap-2 link-hover">
            <TfiEmail />
            <a href="mailto: jpnusvc@gmail.com">jpnusvc@gmail.com</a>
          </span>
          {/* <span className="flex items-center gap-2 link-hover">
          <TbWorldCheck />
          <a
            href="http://www.jpnbd.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.jpnbd.com
          </a>
        </span> */}
        </div>
      </div>
    </div>
  );
};

export default NavContact;
