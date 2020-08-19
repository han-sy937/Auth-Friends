import  React from 'react'

import { axiosWithAuth } from '../components/utils/axiosWithAuth'

class Login extends React.Component {
    state = {
        credentials: {
            username: "Lambda School",
            password: "i<3Lambd4"
        }
    }
     handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };
    
    login = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/login", this.state.credentials)
            .then((res) => {
                localStorage.setItem("token", res.data.payload);
                this.props.history.push("/protected")
            })
            .catch((err) => console.log(err))
            
    };

    render() { 
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        />

                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
};

export default Login