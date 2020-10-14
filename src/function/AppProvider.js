import React from 'react';
import AppContext from '../Contexts/AppContext';
import list from '../data/data';

class AppProvider extends React.Component{
   render(){
       return(
           <AppContext.Provider value={ 'FrontendCore' }>
               { this.props.children}
           </AppContext.Provider>
       );
   }
}

export default AppProvider;