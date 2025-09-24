const Navbar = ({ logo, coin, playerPrice }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex flex-col md:flex-row md:justify-between w-11/12 mx-auto py-5">
      <div className="">
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="flex-col  md:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
          <li>
            <div className="flex items-center gap-1">
              <span className="font-bold">${playerPrice}</span>
              <span className="font-bold">Coin</span>
              <img src={coin} alt="coin" className="w-4" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
