import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <div style={{backgroundColor: "#063255"}}>
        <div className="container4">

            <div className="div11">
                <img src="./img/logo2.png" alt="" />
                <h1>Bespoke software<br /> solutions</h1>
                <div className='iconkaDiv'>
                    <FacebookIcon/>
                    <YouTubeIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/>
                </div>
            </div>
            <div className="div12">
                <span>Company</span>
                <p>About Us</p>
                <p>Careers</p>
                <p>Services</p>
                <p>Blog</p>
            </div>
            <div className="div13">
            <span>Connect</span>
                <p>hi@finsweet.com</p>
                <p>+(123) 456-7890</p>
            </div>
            <div className="div14">
                <span>Join Newsletter</span>
                <form action="#">

                <input type="text" placeholder='Type email here' /><br/>
                <button>Subscribe</button>
                </form>
            </div>
        </div>

    </div>
  )
}
