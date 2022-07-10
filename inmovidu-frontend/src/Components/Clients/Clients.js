import "../Cards/Cards.css";
import cardImage from "../Clients/one.png"
export default function Cards(){
    return(
        <section className="Cards">
            <div className="row gy-5">
                <div className="col-md-3">
                    <div className="card">
                        <img src={cardImage} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={cardImage} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={cardImage} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={cardImage} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={cardImage} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={cardImage} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={cardImage} className="card-img-top" alt="..."/>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <img src={cardImage} className="card-img-top" alt="..."/>
                    </div>
                </div>
            </div>
        </section>
    )
}