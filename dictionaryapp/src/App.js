import React,{useState} from "react";

let dictionary=[

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

]

function App() {
  const[inputText,setInputText]=useState("");
  const[definition,setDefinition]=useState("");
  const handleChange=(e)=>{
   setInputText(e.target.value)
  }
  const handleSearch=()=>{
    let words=inputText.toLowerCase()
    let find=dictionary.find((item)=>item.word.toLowerCase()==words)
    if(find){
      setDefinition(find.meaning)
    }else{
      setDefinition("Word not found in the dictionary.")
    }
  }
  return (
   <>
   <h1>Dictionary App</h1>
   <input type="text" value={inputText} onChange={handleChange} placeholder="Search for a word..."></input>
   <button onClick={handleSearch}>Search</button>
   <strong>Definition:</strong>
   
<p>{definition}</p>
   </>
  );
}

export default App;
