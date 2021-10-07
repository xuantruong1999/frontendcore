import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';

function PrivateRoute({component: Component, ...rest}){
    var isAuthenticated = useSelector(state => state.userLogin.isLogin);
    return (
        <Route {...rest} 
            render={(props) => 
            isAuthenticated ? <Component {...props} /> : <Redirect to={{
                pathname: "/users/login",
                state: {from: props.location}
            }} />
        }/>
    )
}

export default PrivateRoute;