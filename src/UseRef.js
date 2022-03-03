import {useState, useEffect, useRef} from "react";

function UseRef() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current +1;
    });
return (
         <>
             <input typeof="text"
             value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
             />
             <h4>
                 Render Count: {count.current}
             </h4>
         </>
);
}

export default UseRef;