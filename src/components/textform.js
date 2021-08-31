import React,{useState,useEffect} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");  
    const [words, setWords] = useState(0);

    const handletoupper = ()=>{
        // console.log("uppercase is clicked" + text);
        setText(text.toUpperCase());
        props.showAlert("Text has been changed to Uppercase","success");
    }
    const handletolower = ()=>{
        // console.log("uppercase is clicked" + text);
        setText(text.toLowerCase());
        props.showAlert("Text has been changed to Lowercase","success");
    }
    const handleclear = ()=>{
        // console.log("uppercase is clicked" + text);
        setText("");
        props.showAlert("Text has been Cleared","success");
    }
    const handlecountvowel = ()=>{
        let vcount = 0;
        // console.log("uppercase is clicked" + text);
        for(let i = 0;i<text.length;i++){
            if(text[i]==="a" || text[i]==="e" || text[i]==="i" || text[i]==="o" || text[i]==="u" || text[i]==="A" || text[i]==="E" || text[i]==="I" || text[i]==="O" || text[i]==="U"){
                vcount++;
            }
        }
        alert("Your text has " + vcount + " vowels");
    }
    const handleonchange = (event)=>{
        // console.log("Value Changed");
        setText(event.target.value);
        
    }
    useEffect(() => {
        let wordsarr = text.split(" ").filter(ele=>ele.length!==0)
        text===""?setWords(0):setWords(wordsarr.length)
        console.log("aur bhai")
    }, [text,words]);
    return (
        <>
        <div className="container mt-4" style={{color : props.mode==="dark"?"black":"white"}}>
            <h1 className= "mb-3">Enter the text to analyze below</h1>
            <div className="mb-3">
                <textarea className={`form-control border-1 border-${props.mode}`} style={{background: "transparent",color:props.mode==="dark"?"black":"white"}} value={text} onChange = {handleonchange} id="exampleFormControlTextarea1" rows="8">    </textarea>
            </div>
            <button type="button" className={`btn btn-${props.mode} mx-1`} onClick ={handletoupper}>Convert to Uppercase</button>
            <button type="button" className={`btn btn-${props.mode} mx-1`} onClick ={handletolower}>Convert to Lowercase</button>
            <button type="button" className={`btn btn-${props.mode} mx-1`} onClick ={handleclear}>Clear text</button>
            <button type="button" className={`btn btn-${props.mode} mx-1`} onClick ={handlecountvowel}>Count number of vowels</button>
        </div>
        <div className="container mt-3" style={{color : props.mode==="dark"?"black":"white"}}>
            <h2>Words and Characters Count</h2>
            <p>{words} words and {text.length} characters</p>
            <p>{(words * 0.008).toFixed(4)} minutes to read above sentence </p>

            <h2>Text Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
