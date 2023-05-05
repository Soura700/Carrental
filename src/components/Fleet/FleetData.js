import "./FleetStyles.css";

export default function FleetData(props) {
    return(
        <div className="f-card">
            <div className="f-image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <button>{props.cost}</button>
        </div>
    )
}