import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div className="mt-2 col-9">
               <h1>Home</h1>
               <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="display-4">BC APP JUMBOTRON</h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;