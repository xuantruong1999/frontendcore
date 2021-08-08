import '../Sass/components/login.scss';
import {useState} from 'react';

export default function Login(){
    var[username, changeUserName] = useState("");
    var[password, changePassword] = useState("");

    const handleSubmit = (event) =>{
 
        
    }
    return(
        <>
            <section className="" id="wrapper-login-form" >
                <form className="border" onSubmit={handleSubmit}>
                    <h1 className="text-center">Đăng Nhập</h1>
                    <div className="form-group">
                        <label htmlFor="username">User Name:</label>
                        <input type="text" className="form-control " id="username" name="username" onChange={ event => changeUserName(username = event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password:</label>
                        <input type="password" className="form-control" id="pass" name="pass"  onChange={ event => changePassword(password = event.target.value)} />
                    </div>
                   <div className="form-check">
                       <input type="checkbox" name="remember" className="form-check-input"/>
                       <label htmlFor="remember" className="form-check-label">Remember me</label>
                   </div>
                    <button className="btn btn-primary">Đăng Nhập</button>
                </form>
            </section>
        </>
    );
}


