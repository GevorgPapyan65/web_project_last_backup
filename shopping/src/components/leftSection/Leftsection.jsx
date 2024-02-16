import './leftsection.css'
import img from '../../assets/logoname.png'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentsIcon from '@mui/icons-material/Payments';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HistoryIcon from '@mui/icons-material/History';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
function Leftsection() {
  return (
    <div>
      <div className='div_left_section'>
        <img src={img} alt="" />
        <div className='container'>

        
        <div className='sec_1'>
          <HomeIcon />
          <span>Home</span>
        </div>
        <div className='sec_2'>
          <ExploreIcon/>
          <span>Explore</span>
        </div>
        <div className='sec_2'>
           <FavoriteBorderIcon/>
          <span>Saved</span>
        </div>
        <div className='sec_2'>
          <ShoppingCartIcon/>
          <span>Cart</span>
        </div>
        <div className='sec_2'>
          <PaymentsIcon/>
          <span>Selling</span>
        </div>


        <div className='sec_2'>
          <PersonOutlineIcon/>
          <span>Profile</span>
        </div> 
        <div className='sec_2'>
          <HistoryIcon/>
          <span>History</span>
        </div> 
        <div className='sec_2'>
          <ChatBubbleOutlineIcon/>
          <span>Countact us</span>
        </div> 
        <div className='sec_2'>
          <SettingsIcon/>
          <span>Settings</span>
        </div> 
      </div>
      </div>
    </div>
  )
}

export default Leftsection

