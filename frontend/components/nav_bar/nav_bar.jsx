import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container'; 

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout();
    }

    handleCreate() {
        document.getElementById('postform').className = 'show';
    }

    render() {
        return (
            <div id="navbar" className="navbar navbar-top">

                <div className="subnav-bar">

                    <div className="nav-index">
                        <Link to="/home"> 
                            <i className="fab fa-instagram"/>
                            <h3 id="nav-logo" className="logo">Fiestagram</h3>
                        </Link>
                    </div>

                    <SearchBarContainer />

                    <div className="nav-menu">
                        <div className="create-post-button"
                            onClick={this.handleCreate}>
                            <img src="/images/create_post.png"/>
                        </div>
                        <div className="profile-button">
                            <Link to={`/profile/${this.props.user.id}`}>
                                <img src="/images/profile.png"/>
                            </Link>
                        </div>
                        <div onClick={this.handleLogout}
                            className="logout-button">
                            <img src="/images/logout.png"/>
                        </div>
                    </div>

                </div>
                
            </div> 
        );
    }
}

export default NavBar; 