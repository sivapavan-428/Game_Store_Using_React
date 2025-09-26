import React from "react";


function SignUp() {
    return (
        <div className="signup">
            <h2>Create an account</h2>
            <p>Already have an account? <Link to="/login"> Login</Link> </p>
            <form action="/signup" method="POST">
                <div className="fullName">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <input type="email" name="Email" id="email" placeholder="Email" />
                <input type="password" name="Password" id="password" placeholder="Enter your password" />
                <p>I agree to the <a href="">Terms & Conditions</a></p>
                <button type="submit">Create account</button>
            </form>
            <p>or rigister with</p>
            <div className="accounts">
                <button>
                    <a href="">Google</a>
                </button>
                <button>
                    <a href="">Apple</a>
                </button>
            </div>
        </div>
    );
};
export default SignUp;