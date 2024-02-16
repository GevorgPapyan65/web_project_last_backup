import './topbar.css'

export default function Topbar() {
  return (
    <div>
      <div>
        <nav className="navBar">
            <img src="./img/logo.png" alt="" />

            <ul className="ulContainer">
                <li>About Us</li>
                <li>Careers</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Contact us</li>
            </ul>
        </nav>
      </div>
    </div>
  )
}
