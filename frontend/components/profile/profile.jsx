import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import CreatePostFormContainer from '../post_form/create_post_form_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <>
                <NavBarContainer/>
                <p>I'm the profile page</p>
                <CreatePostFormContainer/>
            </>
        );
    }
}

export default Profile;