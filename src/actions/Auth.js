import axios from "axios"

export const loginRequest = async(formData, swal) => {

    axios.post('https://api-flordeemprendedora.start-7.com/api/auth/login/', formData)
    .then((res) => {
        localStorage.setItem('projectlist_profile', JSON.stringify({token: res?.data.token}))
        swal({
            
                title: 'Login exitoso',
                text: `Bem vindo de volta ${res?.data?.first_name}!`,
                icon: `success`
            
        })
    })
    .catch((error) => {
        console.log(error);
        swal({
            title: 'Credenciais erradas',
            text: 'Tente novamente',
            icon: `warning`
        })
    })
}

