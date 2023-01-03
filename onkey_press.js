import { useState} from "react";
import "./styles.css";

export default function App() {
  const [highlight, setHighlight] = useState("2px solid black");
    function handleKeyPress(e) {
        var key = e.key;
        console.log( "You pressed a key: " + key );
        if (key == "r") {
            setHighlight("10px solid red")
        }
        else if (key == "g") {
            setHighlight("10px solid green")
        }
    }

    return (
        <div>
            <input type="text" onKeyPress={(e) => handleKeyPress(e)} style={{border: highlight}} />
        </div>
    )
}
