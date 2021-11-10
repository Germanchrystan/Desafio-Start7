import axios from "axios"

export const loginRequest = async(formData) => {

    axios.post('https://api-flordeemprendedora.start-7.com/api/auth/login/', formData)
    .then((res) => {
        localStorage.setItem('projectlist_profile', JSON.stringify({token: res?.data.token}))
    })
    .catch((error) => {
        console.log(error);
        alert('Credenciais erradas')
    })
}

