import Footer from "../../components/Footer/Footer"
import Section1 from "../../components/Section1/Section1"
import Section2 from "../../components/Section2/Section2"
import Section3 from "../../components/Section3/Section3"
import Section4 from "../../components/Section4/Section4"
import Topbar from "../../components/Topbar/Topbar"
import Nkar from "../../components/nkar/Nkar"
import "./home.css"

export default function Home() {
  return (
    <div>
      <Topbar/>
      <Nkar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  )
}
