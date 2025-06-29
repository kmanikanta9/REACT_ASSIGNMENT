import React from "react";

const AutoCorrect=({text,correctionobj})=>{
    let correctedWordCount=0;
    if(text==""){
        return <p>Please enter some text to corrext.</p>
    }

    const words=text.split(" ")
    const correctedWords=words.map((word)=>{
        if(correctionobj[word]){
            correctedWordCount++
            return correctionobj[word]
        }
        return word
    })
    const correctedText=correctedWords.join(" ")
    return(
        <div>
            <h4>Corrected Text Preview:{correctedWordCount}</h4>
            <p>{correctedText}</p>
        </div>
    )
}
export default AutoCorrect