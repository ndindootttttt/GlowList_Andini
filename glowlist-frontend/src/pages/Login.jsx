import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.auth) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("idPengguna", data.id_pengguna);
        localStorage.setItem("nama", data.nama);

        alert("Login berhasil, selamat datang " + data.nama + "!");
        navigate("/produk");
      } else {
        alert(data.message || "Login gagal");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Terjadi kesalahan saat login");
    }
  };

 return (
  <div className="login-page">
    <div className="login-container">

      <div className="login-left">
        <main className="login-main">
          <form className="login-form" onSubmit={handleSubmit}>

            <h1>Login</h1>

            <div className="input-box">
              <div className="input-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <div className="input-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="5" y="10" width="14" height="10" rx="2" />
                  <path d="M8 10V7a4 4 0 018 0v3" />
                </svg>
              </div>

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="forgot-password">
              <a href="#">Forgot Password</a>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>

            <div className="divider">
              <span></span>
              <p>Or login with</p>
              <span></span>
            </div>

            <div className="social-login">

              <button type="button" className="social-button">
                <span className="google-icon">G</span>
              </button>

              <button type="button" className="social-button">
                <span className="facebook-icon">f</span>
              </button>

              <button type="button" className="social-button">
                <span className="apple-icon">bukan macbook</span>
              </button>

            </div>

            <div className="signup-text">
              <span>Don’t have account?</span>
              <a href="#">Sign Up</a>
            </div>

          </form>
        </main>
      </div>

      <div className="login-right">

          <img
  src="http://localhost:3001/uploads/paycounter-logo.png"
  alt="PayCounter"
  className="paycounter-logo"
/>
        </div>

    </div>
  </div>
);
}