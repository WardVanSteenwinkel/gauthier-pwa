import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";
import {PralineDetails} from "../pages/PralineDetails";

export function PralineCard(props){
    const {praline} = props;

    return(
        <>
            <Link to={`/details/${praline.name}`}>
                <div className="myCard">
                    <Card className="m-0" style={{ width: '20rem'}}>
                        <Card.Img className="card_img" variant="top" src={`${praline.img}`} style={{width: "19.35rem"}}/>
                        <Card.Body>
                            <Card.Title><h3 id="card_name">{praline.name}</h3></Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </Link>
        </>
    )
}




