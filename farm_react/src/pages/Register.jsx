import { useState } from 'react';
import '../css/Register.css';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  let navigate = useNavigate();
  const sendEmailOTP = () => {
    alert("Email OTP Sent!");
  };

  const sendMobileOTP = () => {
    alert("Mobile OTP Sent!");
  };

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    password1: '',
    password2: ''
  });

  return (
    <main id="register-page">
      <div className="register-wrapper">
        <div className="container">
          <h1 className="form-heading">Sign Up</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(formData);
              alert("Form submitted!\n" + JSON.stringify(formData, null, 2));
              setFormData({
                first_name: '',
                last_name: '',
                email: '',
                mobile: '',
                password1: '',
                password2: ''
              });

              // Redirect to login page
              navigate('/login');
            }}
          >
            <div className="form-grid">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="id_first_name">First Name</label>
                  <input
                    type="text"
                    id="id_first_name"
                    name="first_name"
                    placeholder="Enter your first name"
                    value={formData.first_name}
                    onChange={(e) =>
                      setFormData({ ...formData, first_name: e.target.value })
                    }
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="id_last_name">Last Name</label>
                  <input
                    type="text"
                    id="id_last_name"
                    name="last_name"
                    placeholder="Enter your last name"
                    value={formData.last_name}
                    onChange={(e) =>
                      setFormData({ ...formData, last_name: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="id_email">Email</label>
                <div className="input-group">
                  <input
                    type="email"
                    id="id_email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <button type="button" className="btn-validate" onClick={sendEmailOTP}>
                    Validate
                  </button>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="id_mobile">Mobile Number</label>
                <div className="input-group">
                  <input
                    type="text"
                    id="id_mobile"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                  <button type="button" className="btn-validate" onClick={sendMobileOTP}>
                    Validate
                  </button>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="id_password1">Password</label>
                <input
                  type="password"
                  id="id_password1"
                  name="password1"
                  placeholder="Enter your password"
                  value={formData.password1}
                  onChange={(e) =>
                    setFormData({ ...formData, password1: e.target.value })
                  }
                />
              </div>

              <div className="form-field">
                <label htmlFor="id_password2">Confirm Password</label>
                <input
                  type="password"
                  id="id_password2"
                  name="password2"
                  placeholder="Confirm your password"
                  value={formData.password2}
                  onChange={(e) =>
                    setFormData({ ...formData, password2: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-actions">
              <input type="submit" value="Sign Up" className="btn-submit" />
            </div>

            <div className="already-registered">
              Already have an account? <Link to="/login">Log in</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Register;
