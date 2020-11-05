import React from 'react';

import './style.css';
import Logo from './../../assets/flairs logo.png';

function Login() {
    return (
        <div className="login">
            <div className="corpo">
                <div className="card">
                    <img src={Logo} />
                    <div className="textos">
                        <input placeholder="E-mail" type="email" required></input>
                        <input placeholder="Senha" type="password" required></input>
                    </div>
                    <div className="btns">
                        <button className="btn-sub" type="submit">Enviar</button>
                        <button className="btn-reg" type="button">Pedir Registro</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;