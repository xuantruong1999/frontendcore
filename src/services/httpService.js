import exios from 'axios';
/**
 * 
 * @param {url} endpoint 
 * if request contain data return json object otherwire false
 */

const getAll =  async function getAll(endpoint){
    var result = await exios.get(endpoint)
    return result;
}

const getById = async function getById(endpoint){
     var result = await exios.get(endpoint)
     .then(response =>{
         if(response.status === 200){
             return (response.data);
         }
         else{
             return {title: response.title};
         }
     })
     return result;
                
}

export {getAll, getById}