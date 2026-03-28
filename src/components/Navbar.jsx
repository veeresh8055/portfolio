import darkIcon from "../assets/svg/dark.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navlink">
        <li>Home</li>
        <li>Project</li>
        <li>Contact</li>
      </div>

      <div className="themeBtn">
        <img src={darkIcon} alt="dark" />
      </div>
    </div>
  );
};
export default Navbar;