import { Link, UseNavigate } from "react-router-dom";

export default function Header() {

     const navigate = useNavigate();

     const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <Link to="/" className="navbar-brand">✨ GlowList</Link>
            <button className="btn btn-danger">Logout</button>
        </nav>
    );
}