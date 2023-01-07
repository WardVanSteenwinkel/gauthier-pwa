import {Button} from "react-bootstrap";

export function MyButton(props){
    const{onClick, children} = props;
    return(
        <Button id="add_praline_btn" onClick={onClick}>
            {children}
        </Button>
    );
}