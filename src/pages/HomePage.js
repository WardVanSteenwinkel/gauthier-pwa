import {Carousel, Col, Container, Row} from "react-bootstrap";
import {FaFacebook} from "react-icons/fa"
import {Link} from "react-router-dom";

export function HomePage(){
    return(
        <div>
            <p style={{fontSize:"70px", textAlign:"center"}}>Chocolaterie Gauthier</p>
            <p style={{fontSize:"40px", textAlign:"center"}}>Al 58 jaar echte Belgische pralines</p>
            <Container className="container">
                <Row className="row">
                    <Col className="col-4">
                        <img src={require(`../img/WhatsApp Image 2021-12-21 at 13.46.42.jpeg`)}/>
                        <img src={require(`../img/specu3.jpg`)}/>
                        <img src={require(`../img/1.jpg`)}/>
                        <img src={require(`../img/271092285_732811521013526_4360940397076505754_n.jpg`)}/>
                    </Col>
                    <Col className="col-4">
                        <img src={require(`../img/3.jpg`)}/>
                        <img src={require(`../img/270792671_1386270578471620_5863187730809145128_n.jpg`)}/>
                        <img src={require(`../img/WhatsApp Image 2021-12-21 at 13.46.47.jpeg`)}/>
                        <img src={require(`../img/2.jpg`)}/>
                    </Col>
                    <Col className="col-4">
                        <img src={require(`../img/4.jpg`)}/>
                        <img src={require(`../img/WhatsApp Image 2021-12-21 at 13.46.58.jpeg`)}/>
                        <img src={require(`../img/270754946_955818591722313_8739271831797087872_n.jpg`)}/>
                        <img src={require(`../img/specu1.jpg`)}/>
                    </Col>
                </Row>
            </Container>
            <div style={{textAlign: "center", margin:"30px"}}>
                <a href={`https://www.facebook.com/profile.php?id=100063462343588`}>
                    <FaFacebook size={40} style={{color: "black"}}/>
                </a>
            </div>
        </div>

    )
}