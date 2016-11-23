import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
    render() {
        console.log('render login');

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <form role="form">
                            <fieldset>
                                <h2>Login</h2>

                                <hr className="colorgraph" />

                                <div className="form-group">
                                    <input type="text" name="name" id="name"
                                        className="form-control input-lg"
                                        placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" id="password"
                                        className="form-control input-lg"
                                        placeholder="Password" />
                                </div>

                                <hr className="colorgraph" />

                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                        <input type="submit"
                                            className="btn btn-lg btn-success btn-block"
                                            value="Sign In" />
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                        <Link to="/register"
                                            className="btn btn-lg btn-primary btn-block">
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;