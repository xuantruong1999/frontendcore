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

const getById = function getById(endpoint){
     var result = exios.get(endpoint)
     return result;
                
}

export {getAll, getById}