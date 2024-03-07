import logo from "../../../public/images/logo Air.png"

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 max-w-screen mx-auto shadow-2xl">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-medium">
      <li><a>Blog</a></li>
      <li><a>Offer</a></li>
      <li><a>Airlines</a></li>
      <li><a>About</a></li>
      </ul>
    </div>

   
   <img className="w-[40px] h-[40px]" src={logo} alt="" />
   
    <a className="text-3xl font-bold"><span className="text-[#FFB700]">Air</span><span className="text-blue-600">Book</span> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg font-medium">
      <li><a>Blog</a></li>
      <li><a>Offer</a></li>
      <li><a>Airlines</a></li>
      <li><a>About</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-outline btn-sm bg-[#006CE4] w-[110px] h-[40px] text-white">Sign in</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;