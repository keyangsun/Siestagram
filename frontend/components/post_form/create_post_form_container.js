import PostForm from './post_form';
import { createPost } from '../../actions/post_actions'; 
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom';

const mapSTP = state => ({
    errors: state.errors.posts,
    post: {
        location: '',
        caption: '',
        photo: null,
        preview: null
    }
});

const mapDTP = dispatch => ({
    action: post => dispatch(createPost(post))
});

export default withRouter(connect(mapSTP, mapDTP)(PostForm)); 