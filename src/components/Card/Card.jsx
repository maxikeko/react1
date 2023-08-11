import Button from "../Button/Button";
import "./card.css";

export default function Card(props){
    

    return(

        <div className="card" >
            <div >
                <img className="card-img" src={props.img} alt="" />
            </div>

            <div className="card-detail">
                <h2>{`Aprende ${props.title}`} </h2>
                <p>{props.detail}</p>
                <h4>Precio ${props.precio}</h4>
            </div>
            <div className="div-boton">
                <Button/>
            </div>
        </div>
    );
}