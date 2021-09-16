import axiosClient from './httpService'

export async function login(username, password){
    try{
        var url = "users/login";
        var data = {
            username: username,
            password: password
        };
        var response = await axiosClient.post(url, data)
        localStorage.setItem("token", response.data.token)
        return response;
    }
    catch(err){
        throw err;
    }
}

