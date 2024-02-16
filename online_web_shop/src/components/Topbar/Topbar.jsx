import Nkar from "../nkar/Nkar"
import "./topbar.css"
import { Person, Search, ShoppingBag } from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="OBSHI">
      <div className="Wrapper">
        <div className="leftBar">
            <Search/>
        </div>
        <div className="centerBar">
            <img src="/img/logo.png" alt="" />
        </div>
        <div className="rightBar">
            <div className="accountShop">
                <div className="account">
                  <Person/>
                    <span>Account</span>
                </div>
                <div className="shop">
                    <ShoppingBag />
                    <span>Shoping</span>
                </div>
            </div>
        </div>
      </div>
      <div className="containerUlLi">
        <ul className="ulContainer">
            <li>Jewelry & Accessories</li>
            <li>Clothing & Shoes</li>
            <li>Home & Living</li>
            <li>Wedding & Party</li>
            <li>Toys & Entertainment</li>
            <li>Art & Collectibles</li>
            <li>Craft Supplies & Tools</li>
        </ul>
      </div>


    </div>
  )
}
