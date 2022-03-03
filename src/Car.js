function Car(props) {
    return <>
        <h1>My {props.carDetails.brand}</h1>
        <p>
            It is a {props.carDetails.color} {props.carDetails.model} from {props.carDetails.year}.
        </p>
    </>;
}

export default Car;