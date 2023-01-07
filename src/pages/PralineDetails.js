import {useParams} from "react-router-dom";
import {PRALINES_DATA} from "../data";



export function PralineDetails(){
    const {pralines} = PRALINES_DATA;
    const {id} = useParams();

    const praline = pralines.find(obj => obj.id === id);

    return(
        <div style={{display: "flex"}}>
            <div style={{margin: "50px 200px"}}>
                <img alt={"praline afbeelding"} src={`${praline.image}`} style={{width: "600px", height: "auto"}}/>
            </div>
            <div style={{margin: "50px 100px", alignItems:"left"}}>
                    <h1 style={{float: 'left'}}>{praline.name}</h1>
                    <p style={{fontSize: "25px", float:'left'}}>{praline.description}</p>
                <ul style={{fontSize: "20px"}}>
                    <p style={{marginTop:"200px"}}>Vulling:</p>
                    <li>{praline.fillings[0]}</li>
                    {praline.fillings[1] &&
                        <li>{praline.fillings[1]}</li>
                    }
                    {praline.fillings[2] &&
                        <li>{praline.fillings[2]}</li>
                    }
                </ul>
            </div>
        </div>
    )
}