import React, {Component, useContext} from 'react';
import AppContext from '../Contexts/AppContext';

export default function Search(){
    const [setList] = useContext(AppContext);
    setList("abc");
    return(
        <form class="form-inline my-2 my-lg-0 ml-5">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    );
}