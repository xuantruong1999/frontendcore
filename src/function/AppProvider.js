import React, { useReducer} from 'react';
import AppContext from '../Contexts/AppContext';
import list from '../data/data';


class AppProvider extends React.Component{
    
    filter(name){
        console.log(name);
    }

    render(){
       return(
           <AppContext.Provider value={[list, setList] }>
               { this.props.children}
           </AppContext.Provider>
       );
   }
}

export default AppProvider;