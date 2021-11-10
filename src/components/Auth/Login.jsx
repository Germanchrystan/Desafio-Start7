import React, {useState} from 'react'
import './Login.css';
import {loginRequest} from './../../actions/Auth';
import Logo from './../../assets/logo.png';
import GoogleLogo from './../../assets/GoogleLogo.png';
import FacebookLogo from './../../assets/FacebookLogo.png';

const initialFormData = {
    username:'',
    password:''
}

function Login() {
    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(
            formData.username.trim() ==='' ||
            formData.password.trim() ==='') {
                alert('Por favor, preencha o formulário')
            }
        loginRequest(formData);
    }


    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-6 text-black">
                    <div className="px-5 ms-xl-4">
                    <hr />
                    <span className="h1 fw-bold mb-0">Bem-vindo de volta!</span>
                    <p className="subtitle-message">Estamos felizes que esteja de volta para retomar seus projetos no Projetolist.</p>
                    </div>

                    <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                    <form onSubmit={(e) => handleSubmit(e)} style={{width: "23rem"}}>

                        <div className="form-outline mb-4">
                            <input 
                            name="username" 
                            value={formData.username} 
                            onChange={(e) => handleInputChange(e)} 
                            placeholder="Email" 
                            type="email"
                            id="form2Example18" 
                            className="form-control form-control-lg" />
                        </div>
                        <div className="form-outline mb-4">
                            <input 
                            name="password" 
                            value={formData.password} 
                            onChange={(e) => handleInputChange(e)} 
                            placeholder="Senha"
                            type="password" 
                            id="form2Example28" 
                            className="form-control form-control-lg" />
                        </div>

                        <p><a href="#!" className="recover-password">Esqueceu sua senha?</a></p>

                        <div className="pt-1 mb-4">
                            <input 
                            type="submit" 
                            //className="btn btn-info btn-lg btn-block" 
                            value="Login"
                            id="login-button" />
                        </div>
                    <p>OU ENTRE COM</p>
                    <div className="logos-container">
                        <img src={GoogleLogo} className="logo-icon" alt="google" />
                        <img src={FacebookLogo} className="logo-icon" alt="facebook" />
                    </div>
                    <p>Ainda não tem uma conta? <a href="#">Cadastre-se</a></p>
                    </form>
                    </div>

                    </div>
                    <div id="right-panel" className="col-sm-6 px-0 d-none d-sm-block">
                        <div className="right-panel__content">
                            <div className="right-panel__content__row">
                                <img src={Logo} alt="logo" className="logo-img" />
                                <p><a className="help-link" href="#">Ajuda</a></p>
                            </div>                        
                            <div className="svg-container">
                                <svg width="491" height="367" viewBox="0 0 491 367" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M444.969 0H46.0312C20.1387 0 0 21.026 0 45.875V321.125C0 346.93 20.1387 367 46.0312 367H444.969C469.902 367 491 346.93 491 321.125V45.875C491 21.026 469.902 0 444.969 0ZM439.215 321.125H51.7852C47.9492 321.125 46.0312 319.214 46.0312 315.391V51.6094C46.0312 48.7422 47.9492 45.875 51.7852 45.875H439.215C442.092 45.875 444.969 48.7422 444.969 51.6094V315.391C444.969 319.214 442.092 321.125 439.215 321.125ZM122.75 84.1042C100.693 84.1042 84.3906 101.307 84.3906 122.333C84.3906 144.315 100.693 160.562 122.75 160.562C143.848 160.562 161.109 144.315 161.109 122.333C161.109 101.307 143.848 84.1042 122.75 84.1042ZM92.0625 275.25H398.938V198.792L314.547 115.643C309.752 110.865 303.039 110.865 298.244 115.643L184.125 229.375L145.766 192.102C140.971 187.323 134.258 187.323 129.463 192.102L92.0625 229.375V275.25Z" fill="#3C84EC"/>
                                </svg>
                            </div>
                            <div className="right-panel__content__row">
                                <p className="footer-p">©2021, Projetolist</p>
                                <p className="footer-p">UI/UZX Design and Front-end by: </p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Login
