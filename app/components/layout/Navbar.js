import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <button className="navbar-toggler hidden-sm-up" type="button"
                    data-toggle="collapse" data-target="#collapseEx2">
                    <i className="fa fa-bars"></i>
                </button>

                <div className="container">
                    <div className="collapse navbar-toggleable-xs" id="collapseEx2">
                        <a className="navbar-brand">PICTO.IO</a>
                        <ul className="nav navbar-nav">
                            <li className="nav-item active">
                                <a href="#" className="nav-link">
                                    {this.props.username}
                                </a>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav nav-flex-icons">
                            <li className="nav-item">
                                <a href="#" className="nav-link waves-effect waves-light">
                                    {this.props.currentUsersNumber}
                                    {' '}
                                    <i className="fa fa-user"></i>
                                    {' '}
                                    in the lobby
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;