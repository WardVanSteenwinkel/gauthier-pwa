import {useParams} from "react-router-dom";

export function PralineDetails(props){
    const {name} = useParams();
    const {pralines} = props;
    const praline = pralines.find(obj => obj.name === name);
    console.log(praline.img);

    return(
        <div style={{display: "flex"}} className="details">
            <div style={{margin: "50px 200px"}}>
                <img alt={"praline afbeelding"} src={`${praline.img}`} style={{width: "600px", height: "auto"}} id="details_img"/>
            </div>
            <div style={{margin: "50px 100px", alignItems:"left"}} id="details_div">
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