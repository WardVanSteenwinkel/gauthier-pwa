import {Pralines} from "../components/Pralines";
import {Button, Col, Container, DropdownButton} from "react-bootstrap";
import {useEffect, useState} from "react";
import DropdownItem from "react-bootstrap/DropdownItem";



export function PralinesPage(props){
    const {pralines, vullingen} = props;
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState("");
    const [vulling, setVulling] = useState("");

    const reset = () => {
        setColor("");
        setVulling("");
    }


    return(
        <>
            <p style={{fontSize: "50px", textAlign:"center"}}>Ons assortiment</p>
                <section className="filter">
                    <div id="inner_filter">
                        <h2 style={{float: "left"}}>Filter</h2>
                        <div>
                            {(!color && !vulling) && <p className="count">Pralines gevonden: {pralines?.length}</p>}{(color && vulling) && <p className="count">Pralines gevonden: {pralines?.filter(p => p.color===color && p.fillings.includes(vulling)).length}</p>}{!(color && vulling) && (color || vulling) && <p className="count">Pralines gevonden: {pralines?.filter(p => p.color===color || p.fillings.includes(vulling)).length}</p>}
                        </div>
                        <div>
                            <DropdownButton id="filter_button" title="Soort chocolade">
                                <DropdownItem onClick={() => setColor("melk")}>
                                    Melk
                                </DropdownItem>
                                <DropdownItem onClick={() => setColor("wit")}>
                                    Wit
                                </DropdownItem>
                                <DropdownItem onClick={() => setColor("zwart")}>
                                    Zwart
                                </DropdownItem>
                            </DropdownButton>
                            <DropdownButton id="filter_button" title={"Vulling"}>
                                {
                                    vullingen?.map((v) =>
                                        <div key={v.id}>
                                            <DropdownItem onClick={() => setVulling(v.name)}>
                                                {v.name}
                                            </DropdownItem>
                                        </div>
                                    )
                                }
                            </DropdownButton>
                        </div>
                        <div style={{marginTop: "30px"}}>
                            {(color || vulling) &&
                                <p style={{fontSize:"20px"}}>
                                    filters: <br/>
                                    {color && `soort chocolade: ${color}`}<br/>
                                    {vulling && `vulling: ${vulling}`}
                                </p>
                            }
                        </div>
                    </div>
                </section>

            <Container fluid={"md"}>
                {(!color && !vulling) &&
                    <>
                        <Pralines pralines = {pralines}/>
                    </>

                }
                {(color && vulling) &&
                    <>
                        <Pralines pralines={pralines.filter(p => p.color===color && p.fillings.includes(vulling))}/>
                        <Button style={{marginTop:"50px"}} onClick={() => reset()}>
                            RESET
                        </Button>
                    </>
                }
                {!(color && vulling) && (color || vulling) &&
                    <>
                        <Pralines pralines={pralines.filter(p => p.color===color || p.fillings.includes(vulling))}/>
                        <Button onClick={() => reset()}>
                            RESET
                        </Button>
                    </>
                }
            </Container>
        </>
    )
}