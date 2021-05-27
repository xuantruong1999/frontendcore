const initialState = {
    kw: "",
}
const Search = (state = initialState, searchAction) => {
    switch(searchAction.type){
        case 'SEARCH_ACTION':
            return({...state, kw: searchAction.payload});
            default:
                return state;
    }
}

export default Search