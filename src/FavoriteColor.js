import {useState} from "react";

function FavoriteColor(){
const [color, setColor] = useState("red");

return <>
        <h5>Color name is {color}!</h5>
    <button type="button" onClick={() => setColor('blue')}>Blue</button>
    </>;
}

export default FavoriteColor;