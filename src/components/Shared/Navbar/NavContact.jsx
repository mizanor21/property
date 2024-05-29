import { MdWifiCalling3 } from "react-icons/md";
import { TbWorldCheck } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";

const NavContact = () => {
  return (
    <div className="bg-green-700 text-white font-mono lg:flex gap-5 justify-center hidden">
      <span className="flex items-center gap-2">
        <MdWifiCalling3 />
        +88 01925 507 436(BD)
      </span>
      <span className="flex items-center gap-2">
        <MdWifiCalling3 />
        +971525709908(UAE)
      </span>
      <span className="flex items-center gap-2">
        <TfiEmail />
        jpnusvc@gmail.com
      </span>
      <span className="flex items-center gap-2">
        <TbWorldCheck />
        www.jpnbd.com
      </span>
    </div>
  );
};

export default NavContact;
