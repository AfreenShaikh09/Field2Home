import { FaEnvelope, FaLock, FaFacebookF, FaGoogle } from "react-icons/fa";
import '../css/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-fullscreen">
      <div className="login-box">
        <h1>Login</h1>

        <form className="login-form" method="Post">

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input type="text" placeholder="Username or Email" />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input type="password" placeholder="Password" />
        </div>

        <div className="login-links">
          <a href="#">Forgot Password?</a>
        </div>

        <button className="login-button">Login</button>

        <div className="divider"><span>OR</span></div>

        <div className="social-login">
          <button className="google"><FaGoogle /> Login with Google</button>
          <button className="facebook"><FaFacebookF /> Login with Facebook</button>
        </div>

        <div className="register-link">
          Don’t have an account? <Link to="/register">Register</Link>
        </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
