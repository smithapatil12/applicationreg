import react,{Component, useState} from 'react';
import './App.css';
import axios from 'axios' 
import {button,form,formgroup,label,input}
from 'reactstrap';

class App extends Component {
  render () {
  
    return (
    <form className="text-center">
     <h1 className="text-center">REGISITRATION PAGE</h1>
     <h2 className="text-center">welcome</h2>
     <formgroup>
      <div>
       <label className="base-container">email</label>
      </div>
       <input type="email" placeholder="email"/>
     </formgroup>
<div>
     <formgroup>
      <div>
       <label className="base-container">password</label>
      </div>
       <input type="password" placeholder="password"/>
     </formgroup>
    </div>
     <button className="submit,btn-lg"> log in </button>
    </form>
  );
}
}
function login () {
  let request ={
    email:document.getElementById('email').Value,
    password:document.getElementById('password').value
  }
}

export default App;
