//import logo from './logo.svg';
import './App.css';
// import PasswordGenerator from './PassGenerator';
import { useState } from 'react';

function App() {
const [pass , setpass] = useState("");
const [length, setlength] = useState("8");
const [Uppercase , setuppercase] = useState(true);
const [lowercase, setlowercase] = useState(true);
const [number, setnumber] = useState(true);
const [symbol , setsymbol] = useState(true);

function copytoclipbord(){
  if(pass === "") alert("Password field is empty,nothing to copy!");
    const tempInput = document.createElement('textarea');
    tempInput.value = pass;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Password copied to clipboard!');

}

function generatepass(){
  const u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const l = 'abcdefghijklmnopqrstuvwxyz';
    const n = '0123456789';
    const s = '!@#$%^&*()_-+=<>?';

    let pas = ""

    if(Uppercase){
      pas += u;
    }

    if(lowercase){
      pas += l;
    }

    if(number){
      pas += n;
    }

    if(symbol){
      pas += s;
    }

    if(length < 8 || length > 50){
      return alert("please enter valid length")
    }

    if(!pas){
      return alert("please select at least one Criteria")
    }

       let password = '';
    for(let i = 0; i < length; i++){
        password +=  pas.charAt(Math.floor(Math.random() * pas.length));
    }

    setpass(password);
}

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", minHeight:"80vh", background:"linear-gradient(360deg, rgba(2,0,36,1) 0%, rgba(9,15,121,0.65) 35%, rgba(0,212,255,1) 100%)"}}>

     <div>
     <div style={{display:"flex", alignItems:"center",flexDirection:"column"}}>
        <h1>Password Generator</h1>
       <div style={{display:"flex" , gap:"5px"}}>
          <p style={{width:"500px" , border:"2px solid blue", height:"40px", fontSize:"15px" , margin:"0",  display:"flex", justifyContent:"center", alignItems:"center",  flexWrap:"noWrap",
           backgroundColor:"#f7f9f7"}}>{pass}</p>
          <img style={{backgroundColor
          :"", width:"40px", height:"40px"}} 
          onClick={copytoclipbord}
          src="https://th.bing.com/th/id/R2ac5155460db535e7dc649ec9f5afdee?rik=%2fXMnDS4HFmfXrw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon-bw%2finstagram-icon-copy-and-paste-6.png&ehk=q%2fFSsFqKp%2bvYYDsOoxcsCf6Ek%2bj%2fC1sMY5GddVmBqJY%3d&risl=&pid=ImgRaw" alt=''/>   
       </div>

       <div style={{display:"flex" , justifyContent:"space-between", width:"500px"}} >
        <p>Select Password length <b>(**8-50 characters**)</b> </p>
        <input  style={{height:"25px", margin:"auto"}} type='number' max={50} min={8} value={length} 
        onChange={e => setlength(e.target.value)}
        />
       </div>
    
        <div style={{width:"500px"}}>
          <div >
          <input type='checkbox' 
          checked = {Uppercase}  
          onChange={() => setuppercase(!Uppercase)} /> <label>Include upper case</label>
          </div>
          <div >
          <input type='checkbox' 
          checked = {lowercase}
          onChange={() => setlowercase(!lowercase)} /> <label>Include lower case</label>
          </div>
          <div >
          <input type='checkbox' 
          checked = {number}
          onChange={() => setnumber(!number)}
          /> <label>Include numbers</label>
          </div>
          <div >
          <input type='checkbox' 
          checked= {symbol}
          onChange={() => setsymbol(!symbol)}
          /> <label>Include symbols</label>
          </div>
        </div>
             <div>
            <button style={{padding:"8px 140px", backgroundColor:"blue", color:"white", fontSize:"large", fontWeight:"bolder", borderRadius:"10px", margin:"20px"}}
            onClick={generatepass}
            >Generate Password</button>
             </div>

      </div>

     </div>
  
      {/* <PasswordGenerator/>  */}

     
     
     
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    
  );
}

export default App;
