import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-12">
      <nav className="flex justify-between w-full">
        <div>
          <img src={Logo} alt="" />
        </div>
        <ul className="flex gap-24 w-fit text-white font-semibold">
          <Link to={"/"} className="text-white font-semibold">
            <p>Home</p>
          </Link>
          <Link to={"/about"}>
            <p>About me</p>
          </Link>
          <Link>
            <p>Albums</p>
          </Link>
          <Link>
            <p>Blogs</p>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
