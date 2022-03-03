import Car from './Car';
import {useState} from "react";

function Garage() {

    const [carDetails, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });
    const updateCar =  () => {
setCar(previousState =>  {
   return  {...previousState, color: "white"}
});
    }
    return <div>
        <p> ** Hi! I am a Garage Component (Function Component) ** </p>
        <p>** Car Component Starts Here ** </p>
        <ul>
            <p>Hi Have below Cars in my Garage</p>
            {/*{cars.map(car => <Car brand={car}/>)}*/}
            <Car carDetails={carDetails}/>
            <button type="button" onClick={updateCar}>Update Car Color</button>
        </ul>

        <p>** Car Component Ends here ** </p>
        <p>** Garage Component Ends here ** </p>
    </div>;
}

export default Garage;