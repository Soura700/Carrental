import "./FleetStyles.css";
import FleetData from "./FleetData.js";
import ScorpioN from "../../assets/scorpion.jpg"
import ScorpioC from "../../assets/scorpioclassic.jpeg"
import Thar from "../../assets/Thar.jpg"
import XUV700 from "../../assets/xuv700.jpg"
import Fortuner from "../../assets/fortuner.jpg"
import HeroImg from "../../assets/hero.jpg";
import Gwagon from "../../assets/gwagon.jpeg";
import Pajero from "../../assets/pajero.jpg";
import BenzEQB from "../../assets/Benzeqb.jpg";
import heroimg from "../../assets/Hero1.jpg"
import Hero from '../../components/Hero/Hero.js';

export default function Fleet() {
    return (
        <div className="hero">
            <Hero 
            cName="txt"
            heroImg ={heroimg}/>
            <h1>-Our Fleet-</h1>
            <p>Connecting you to the biggest brands in automobile industry</p>
            <div className="fleet">
            <div className="fleetcard">
                <FleetData 
                image={ScorpioN}
                heading="Mahindra Scorpio-N"
                cost="$120/hr"
                />
                <FleetData 
                image={ScorpioC}
                heading="Mahindra Scorpio-Classic"
                cost="$100/hr"
                />
                <FleetData 
                image={Thar}
                heading="Mahindra Thar"
                cost="$110/hr"
                />
                <FleetData 
                image={XUV700}
                heading="Mahindra XUV700"
                cost="$150/hr"
                />
                <FleetData 
                image={Fortuner}
                heading="Toyota Fortuner"
                cost="$180/hr"
                />
                <FleetData 
                image={Pajero}
                heading="Mitsubishi Pajero"
                cost="$180/hr"
                />
                <FleetData 
                image={Gwagon}
                heading="Mercedes G-Wagon"
                cost="$300/hr"
                />
                <FleetData 
                image={BenzEQB}
                heading="Mercedes Benz EQB"
                cost="$290/hr"
                />
            </div>
            </div>
        </div>
    )
}