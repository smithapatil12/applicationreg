import react,{Component, useState} from 'react';
import './App.css';
import axios from 'axios' 
import {button,form,formgroup,label,input}
from 'reactstrap';

class App extends Component {
  render () {
  
    return (
    <form className="App">
     <h1 className="text-center">my website.com</h1>
     <h2 className="text-center">welcome</h2>
     <formgroup>
       <label className="text-centre">email</label>
       <input type="email" placeholder="email"/>
     </formgroup>
<div>
     <formgroup>
       <label>password</label>
       <input type="password" placeholder="password"/>
     </formgroup>
    </div>
     <button> log in </button>
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
