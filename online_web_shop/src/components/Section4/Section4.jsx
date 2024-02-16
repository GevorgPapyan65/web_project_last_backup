import './Section4.css'

export default function Section4() {
  return (
    <div className='OBSHI'>
      <h1 className='mecatar'>Follow products and discounts on Instagram</h1>
      <div className="nkarneriContainer">
        <img src="/img/06.png" alt="" className='nkarHamar1'/>
        <img src="/img/07.png" alt="" className='nkarHamar1'/>
        <img src="/img/09.png" alt="" className='nkarHamar1'/>
        <img src="/img/05.png" alt="" className='nkarHamar1'/>
        <img src="/img/08.png" alt="" className='nkarHamar1'/>
        <img src="/img/10.png" alt="" className='nkarHamar1'/>
      </div>
      <h1 className='mecatar2'>Or subscribe to the newsletter</h1>
        <form action="#" className='form1'>
            <input type="email" className='typeInput' placeholder='Email Address'/>
            <input type="submit" className='inputeButton'/>
        </form>
    </div>
  )
}
