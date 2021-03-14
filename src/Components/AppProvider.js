import React from 'react';
import AppContext from '../contexts/AppContext';

class AppProvider extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            searchString: ''
        }
    };
    
    getSearchstring = (kw = null) => {
       if(kw != null || kw === ""){
            this.setState({searchString: kw})
      }
    } 

    render(){
       return(
            <AppContext.Provider value={
                {
                    state: this.state,
                    callBack: this.getSearchstring
                }
            }>
                { this.props.children }
            </AppContext.Provider>
       );
   }
}

export default AppProvider;