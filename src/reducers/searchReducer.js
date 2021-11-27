const initialState = {
    kw: "",
    sort: "",
};

const searchReducer = (state = initialState, searchAction) => {
    switch(searchAction.type){
        case 'SEARCH_ACTION':
            return({...state, kw: searchAction.payload});
        case 'SORT_PRICE':
            return({...state, sort: searchAction.payload});
        case 'SORT_BY_DATE':
            return({...state, sort: searchAction.payload});
        default:
            return state;
    }
}

export default searchReducer