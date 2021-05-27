import axios from "axios";


function authen(){
    axios.get('localhost:3000/api/users/login')
    .then((response) =>{
    
    })
    .catch( error => {
        console.log(error);
    })
}