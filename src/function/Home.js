import React from 'react';
import AppContext from '../Contexts/AppContext';

class Home extends React.Component{
    render(){
        return(
            <div className="mt-2">
               <AppContext.Consumer>
                   {
                        (value) => <h1>{value}</h1>
                   }

               </AppContext.Consumer>
            </div>
        );
    }
}
export default Home;