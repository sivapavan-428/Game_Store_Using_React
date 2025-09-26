import { Link } from "react-router-dom";

function Login(){
    return (
        <div className="login">
            <h2>Login</h2>
            <form action="/login" method="POST">
            <input type="email" name="Email" id="email" />
            <input type="password" name="Password" id="password" />
            <div>
                <p>Remember me</p>
                <a href="">Forgot password?</a>
            </div>
            <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup"> Sign Up</Link></p>
        </div> 
    );
};
export default Login;