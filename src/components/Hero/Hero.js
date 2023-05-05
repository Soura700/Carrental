import './HeroStyles.css';

export default function Hero(props){
    return(
        <>
        <div className={props.cName}>
            <img alt="HeroImg" src={props.heroImg}/>
        </div>
        </>
    )
}