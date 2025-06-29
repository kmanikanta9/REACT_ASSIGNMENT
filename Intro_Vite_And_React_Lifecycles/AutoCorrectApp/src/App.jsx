import { useState } from "react"
import AutoCorrect from "./components/Autocorrect"


function App() {
    const [inputText, setInputText] = useState("")
    const corrections = {
        "teh": "the",
        "recieve": "receive",
        "adress": "address",
        "wierd": "weird",
        "thier": "their"
      };
      
    return (
        <div>
            <h2>Auto Correct App</h2>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Type text here..." />
            <AutoCorrect text={inputText} correctionobj={corrections}/>
        </div>
    )
}

export default App;