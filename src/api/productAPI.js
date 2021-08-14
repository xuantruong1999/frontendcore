import axiosClient from "./httpService";

var initialParams = {};

const getAll = (params = initialParams) => {
    const url  = "/products";
    return axiosClient.get(url, {params});
}

const getById = (id) => {
    const url = "/products/details";
    return axiosClient.get(url, {params: {
        id
    }});
}

export {getAll, getById};