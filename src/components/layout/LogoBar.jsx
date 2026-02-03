import logo from "../../assets/images/pizza42-logo.png";

function LogoBar() {
    return (
      <header className="logo-bar">
        <div className="logo-bar-logo">
          <img src={logo} alt="Pizza 42 logo" />
        </div>
        <div className="company-name">Pizza 42</div>
      </header>
    );
  }

export default LogoBar;