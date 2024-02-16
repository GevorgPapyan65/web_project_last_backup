import './nkar.css'
import { Person, Search, ShoppingBag } from "@mui/icons-material"
export default function Nkar() {
  return (
    <div className='OBSHI'>
            <div className="colectionsContainer">
        <div className="leftSide">
            <h2>Collection</h2>
            <span>you can explore ans shop many differnt collection
            from various barands here.</span><br/>
            <button><ShoppingBag/> ShopNow </button>
        </div>
        <div className="rightSide">
            <div className="imgDiv">
                <img src="/img/19.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
