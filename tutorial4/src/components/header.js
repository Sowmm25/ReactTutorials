import Logo  from "../assets/logo1.png"

export const Header = () => {
  return (
    <header>
        <img src={Logo} alt=""/>
        <a href="/">Home</a>
    </header>
  )
}
