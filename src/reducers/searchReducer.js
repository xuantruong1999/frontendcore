const initialState = {
    kw: "",
}
const searchReducer = (state = initialState, searchAction) => {
    switch(searchAction.type){
        case 'SEARCH_ACTION':
            return({...state, kw: searchAction.payload});
        default:
            return state;
    }
}

export default searchReducer