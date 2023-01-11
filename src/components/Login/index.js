import { Component } from "react";
import YouTellIDo from "../YouTellIDo";

import "./index.css";

class Login extends Component {
  state = { email: "", password: "", displayForm: false };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    if ((email === "youtellido@gmail.com") & (password === "1234")) {
      this.setState({ displayForm: true });
    }
    this.setState({ displayForm: false });
  };

  render() {
    const { email, password, displayForm } = this.state;

    return (
      <div className="login-container">
        <form className="login-form">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={this.onEmailChange}
            className="input"
            placeholder="Please enter Email"
          />
          <br />
          <label htmlFor="password" className="label">
            Password:
          </label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.onPasswordChange}
            className="input"
            placeholder="Please enter Password"
          />
          <br />
          <button type="submit" className="submit" onClick={this.onFormSubmit}>
            Sign In
          </button>
        </form>
        {displayForm ? (
          <YouTellIDo />
        ) : (
          <p className="para">Please enter valid Email & Password</p>
        )}
      </div>
    );
  }
}

export default Login;
