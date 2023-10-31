import "./Registration.css";
import { useContext } from "react";
import { AuthProvider } from "../../Providers/Providers";

const Registration = () => {

    const { registration } = useContext(AuthProvider);

    const handleRegistration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm);
        if (password !== confirm) {
            console.log("Password did not match");
            return;
        }
        else if (password.length < 6) {
            console.log("Password length less than six");
            return;
        }
        else {
            registration(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
            form.reset();
        }
    }

    return (
        <div>
            <br /><br />
            <div className="form-container">
                <h2>Registration</h2>
                <form onSubmit={handleRegistration}>
                    <div className="form-control">
                        <label htmlFor="email">Name</label>
                        <input type="text" name="name" required />
                    </div>
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
                    <button className="registration-btn" type="submit">Registration</button>
                    <p className="or">or</p>
                    <button className="google-btn" type="button">Continue with Google</button>
                </form>
            </div>
            <br /><br />
        </div>
    );
};

export default Registration;