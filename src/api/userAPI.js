import axiosClient from './httpService'

export async function login(username, password){
    try{
        var url = "users/login";
        var data = {
            username: username,
            password: password
        };
        var response = await axiosClient.post(url, data);
        return response;
    }
    catch(err){
        throw err;
    }
}

export async function logOut(){
    try{
        var url = "users/logout";
        var response = await axiosClient.get(url)
        return response;
    }
    catch(error){
        throw error
    }
}