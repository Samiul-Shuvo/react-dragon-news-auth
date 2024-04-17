import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)
    const handleSIgnOut = () =>{
        logOut()
        .then()
        .catch()
    }
    const navLinks = <>
       <li><NavLink  to='/'>Home</NavLink></li>
       <li><NavLink to='/about'>About</NavLink></li>
       <li><NavLink to='/career'>Career</NavLink></li>
       <li><NavLink to='/login'>LogIn</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={userDefaultPicture} />
        </div>
      </div>
      {
        user ? 
        <button onClick={handleSIgnOut} className="btn">Sign Out</button>
        :
        <Link to='/login'>
        <button className="btn">Login</button>
        </Link>
      }
  
  </div>
</div>
    );
};

export default Navbar;