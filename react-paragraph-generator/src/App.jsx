import { useCallback, useMemo, useState } from 'react'
import './App.css'

const wordBank = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua"
  // Add more words as needed
];


function App() {
  return (
    <div>
      <h1 style={{paddingLeft: '43%'}}>Para Generator</h1>
      <FormComponent />
    </div>
  )
}

function FormComponent()
{

    const[paralength, setparalength] = useState(0);
    const[paratext, setparatext] = useState("");

    const generatePara = ((event) => {
      event.preventDefault();
      var num = document.getElementById('inputbox').value;
      setparalength(num);
      console.log(paralength);
      
      const words = Array.from({ length: paralength }, () => {
        console.log(paralength);
        const randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        return randomWord.slice(0, 5);
      });
    
      const paragraphText = words.join(' ');
      setparatext(paragraphText);
      //return paragraphText;

    });

    

    
    return <div>
      <form> 
      <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <input id="inputbox" type='number' placeholder='Enter number of words' style={{width: '60%', height: '40px', marginRight: '20px'}} defaultValue={paralength}></input>
            <button onClick={generatePara} style={{height: '45px', width: '80px', backgroundColor: 'black', color: 'white', borderRadius: '20%'}} type='submit'>Submit</button>
      </div>
      </form>
      <div style={{margin: '20px'}}>{paratext}</div>
    </div>
}


export default App
