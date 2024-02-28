import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">OMDATA Consulting</div>
      <div className="icons">
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <span>Admin-Oussama</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
