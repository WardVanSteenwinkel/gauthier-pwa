import {Button, Col, Row} from "react-bootstrap";
import {PralineCard} from "./PralineCard";


export function Pralines(props){
    const {pralines} = props;
    return(
        <Row>
            {pralines?.map(p => <Praline key = {p.id} praline = {p}/>)}
        </Row>
    )
}

export function Praline(props){
    const {praline} = props;
    return(
        <Col className="m-1">
            <PralineCard praline = {praline}/>
        </Col>
    )
}







