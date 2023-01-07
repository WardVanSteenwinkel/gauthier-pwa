import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

export function PralineCard(props){
    const {praline} = props;

    return(
        <div className="myCard">
            <Link to={`/details/${praline.id}`}>
                <Card className="m-0" style={{ width: '20rem'}} >
                    <Card.Img className="card_img" variant="top" src={`${praline.img}`} style={{width: "19.35rem"}}/>
                    <Card.Body>
                        <Card.Title><h3 id="card_name">{praline.name}</h3></Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}




