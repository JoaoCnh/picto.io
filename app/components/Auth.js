import React from 'react';

class Auth extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <form role="form">
                            <fieldset>
                                {this.props.children}
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;