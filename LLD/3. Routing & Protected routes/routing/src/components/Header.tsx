import { Link } from "react-router-dom";

const Header = () => {
  // Write Authentication logic
  // Make login api call, check if token is valid, set the state to true if valid
  // BTW this is a very bad way of implementing protected routes
  // const [isAuthSuccess] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        gap: "1rem",
        position: "absolute",
        top: "0",
        left: "0",
        padding: "1rem",
      }}
    >
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      {/* <Link to={isAuthSuccess ? "/profile" : "/login"}>
        <div>Profile</div>
      </Link> */}
      <Link to="/profile">
        <div>Profile</div>
      </Link>
      <Link to="/login">
        <div>Login</div>
      </Link>
    </header>
  );
};

export default Header;
