import React,{useState} from 'react';
import { connect } from 'react-redux'
import { registerRequest } from '../actions'
import {Link} from 'react-router-dom';
import Header from '../components/Header'


import '../assets/styles/components/Register.scss'

const Register = (props) => {
  const [form,setValues] = useState({
    email: '',
    name:'',
    password:'',
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = Event => {
    
    Event.preventDefault();
    //console.log(form);
    props.registerRequest(form);
    props.history.push('/');

  }

  return (
    <>
    <Header isRegister />
    <section className="register">
      <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          
          <input 
            name="name"
            className="input" 
            type="text" 
            placeholder="Nombre" 
            onChange={handleInput}
            />
          
          <input 
            name="email"
            className="input" 
            type="text" 
            placeholder="Correo" 
            onChange={handleInput}
            />
          
          <input 
            name="password"
            className="input" 
            type="password" 
            placeholder="Contraseña" 
            onChange={handleInput}
            />

          <button name="button">Registrarme</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
      </section>
    </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};
export default connect(null, mapDispatchToProps)(Register)