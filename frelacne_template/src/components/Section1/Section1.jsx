import './section1.css'

export default function Section1() {
  return (
    <div className='container1'>

      <div className="Wrapper">
        <div className="leftSide">
          <h1>Prosper with our
             bespoke solutions</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Suspendisse varius enim in eros elementum tristique</p>
          <div className="buttonDv">
            <button>See our services</button>
            <button>See All Services </button>
          </div>
          <span>Worked with 100+ Companies</span>


        </div>
        <div className="rightSide">
          {/* <img src="./img/Image Wrapper.png" alt="" /> */}
        </div>
      </div>

    </div>
  )
}
