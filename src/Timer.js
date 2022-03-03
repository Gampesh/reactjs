import { useState, useEffect } from "react";

function Timer() {
    const [count, setCount] = useState(0);
    const [calculation, doCalculation] = useState(0);

    useEffect(() => {
        doCalculation(() => count*2);
/*        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);*/
    }, [count]);

    // return <h5>I've rendered {count} times!</h5>;
    return <>
    <p>Count : {count}</p>
        <button onClick={() => setCount((c) => c+1)}>+</button>
        <p>Calculation: {calculation}</p>
    </>
}
export default Timer;
// ReactDOM.render(<Timer />, document.getElementById('root'));