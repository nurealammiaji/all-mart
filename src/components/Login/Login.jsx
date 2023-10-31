import "./Login.css";
import { useContext } from "react";
import { AuthProvider } from "../../Providers/Providers";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const { login } = useContext(AuthProvider);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';
    console.log(from);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        if (password !== confirm) {
            console.log("Password did not match");
            return;
        }
        else if (password.length < 6) {
            console.log("Password length less than six");
            return;
        }
        else {
            login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
            form.reset();
            navigate(from, {replace: true});
        }
    }

    return (
        <div>
            <br /><br />
            <div className="form-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" required />
                    </div>
                    <button className="login-btn" type="submit">Login</button>
                    <p className="or">or</p>
                    <button className="google-btn" type="button">Continue with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;