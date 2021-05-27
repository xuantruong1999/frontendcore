import '../Sass/components/login.scss';

export default function Login(){
    const handleSubmit = (data) =>{
        debugger
        console.log(data);
        return false;
    }
    return(
        <>
            <section className="" id="wrapper-login-form" >
                <form className="border"  action="" method="post" onSubmit={handleSubmit}>
                    <h1 className="text-center">Đăng Nhập</h1>
                    <div className="form-group">
                        <label htmlFor="username">User Name:</label>
                        <input type="text" className="form-control " id="username" name="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password:</label>
                        <input type="password" className="form-control" id="pass" name="pass" />
                    </div>
                   <div className="form-check">
                       <input type="checkbox" name="remember" className="form-check-input"/>
                       <label htmlFor="remember" className="form-check-label">Remember me</label>
                   </div>
                    <input type="submit" className="btn btn-primary" value="Đăng Nhập" />
                </form>
            </section>
        </>
    );
}

