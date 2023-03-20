import React,{useState} from "react";

export default function TextForm(props) {

           //  For Uppercase
              const handleUpclick =() =>{
              // console.log("Uppercase was clicked:" + text);
              let newText = text.toUpperCase();
              setText(newText);
              props.showAlert("Converted to uppercase! 😄","success");
            } 

           // For Lowercase
              const handleLoclick = () =>{
              let newText2 = text.toLowerCase(); 
              setText(newText2);
              props.showAlert("Converted to lowercase! 😃","success");
            }

           // For typeing ( it is mendatory)
              const handleOnchange =(event) =>{
              // console.log("On change");
              setText(event.target.value);
            }

                //clear
                const handleclclick = () =>{
                  setText(" ");
                  props.showAlert("Cleared! 😀","success");

                }

                //copy
                const handlecopy = () =>{
                  var text = document.getElementById("myBox");
                  text.select();
                  navigator.clipboard.writeText(text.value);
                  props.showAlert("Text copied to clipboard! 👍🏻","success");

                }

                //remove extra spaces
                const handleremovespace =()=>{
                  let newText = text.split(/[ ]+/);
                  setText(newText.join(" "));
                  props.showAlert("Extra spaces removed! 🙂","success");
                }


  const [text, setText] = useState('');    
      // text="New state ";//wrong way to use the state
      // setText("New state ");//Correct way to use the state


    return (
      <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}> 
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'  }} onChange={handleOnchange} id="myBox" rows="6"></textarea>
          </div>

          <button  className="btn btn-primary " onClick={handleUpclick}>Convert to uppercase</button><br/>
          <button  className="btn btn-primary my-3" onClick={handleLoclick}>Convert to Lowercase</button>
          <button  className="btn btn-primary mx-3" onClick={handleclclick}>Clear</button>
          <button  className="btn btn-primary mx-3" onClick={handlecopy}>Copy</button>
          <button  className="btn btn-primary mx-3" onClick={handleremovespace}>Remove spaces</button>

      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} and {text.length}</p>
        <p>{0.008 *text.split(" ").length } Minutes Read</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
      </div> 

      </>
    );
}
