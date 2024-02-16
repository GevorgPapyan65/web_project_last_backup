import { Facebook, Instagram, LinkedIn, North, Twitter } from '@mui/icons-material'
import './footer.css'

export default function Footer() {
  return (
    <div>
      <div className="footerContaienr">
        <div className="logoyovDiv">
            <img src="/img/logo.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua</p>
            <div className="iconsDiv">
                <Facebook/>
                <Twitter/>
                <LinkedIn/>
                <Instagram/>
            </div>
        </div>
        <div className="catalogDiv">
            <h1>CATALOG</h1>
            <p>Necklaces</p>
            <p>hoodies</p>
            <p>Jewelry Box</p>
            <p>t-shirt</p>
            <p>jacket</p>
        </div>
        <div className="contactDiv">
        <h1>ABOUT US</h1>
            <p>Our Producers</p>
            <p>Sitemap</p>
            <p>FAQ</p>
            <p>About Us</p>
            <p>Terms & Conditions</p>
        </div>
        <div className="serviceDiv">
        <h1>CUSTOMER SERVICES</h1>
            <p>Contact Us</p>
            <p>Track Your Order</p>
            <p>Product Care & Repair</p>
            <p>Book an Appointment</p>
            <p>Shipping & Returns</p>
        </div>
      </div>

      <div className="verjinDiv">
        <div className="verjinDivContainer">
            <p>© 2022 Coral , Inc.</p>
            <img src="./img/icons_payment 1.png" alt="" />
                <North/> 
        </div>
      </div>
    </div>
  )
}
