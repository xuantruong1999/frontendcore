import React from 'react';

class Home extends React.Component{
  
    render(){
        return(
            <div className="col-9">
               <h1>Home</h1>
               <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">BC APP JUMBOTRON</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;