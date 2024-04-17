import { FaGoogle,FaGithub ,FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline w-full">
        <FaGoogle />

          Google
        </button>
        <button className="btn btn-outline w-full">
        <FaGithub />
          Github
        </button>
      </div>
      <div className="p-4  mb-6 border">
        <h2 className="text-2xl mb-4">Find us on</h2>
       <a href="" className="flex p-4 text-lg  items-center border border-solid border-black rounded-t-lg">
       <FaFacebook className="mr-3" />
       Facebook
       </a>
       <a href="" className="flex p-4 text-lg  items-center  border-x border-black border-solid ">
       <FaTwitter className="mr-3" />
       Twitter
       </a>
       <a href="" className="flex p-4 text-lg  items-center border border-solid border-black rounded-b-lg">
       <FaInstagram className="mr-3" />
       Instagram
       </a>
      </div>


      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl">Q Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
        
      </div>
    </div>
  );
};

export default RightSideNav;
