import { Link, NavLink } from "react-router-dom"
import logo2 from "../assets/logo2.jpg"
export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo2} alt="Routemate logo"/>
        <span>Routemate</span>

      </Link>
      <nav className="navigation"></nav>
      <NavLink className="link" to="/" end>Home</NavLink>
      <NavLink className="link" to="/products">Products</NavLink>
      <NavLink className="link" to="contact">Contact</NavLink>

    </header>
  )
}
