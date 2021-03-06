import { connect } from 'react-redux';
import { 
    signup, login, clearSessionErrors 
    } from '../../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router-dom';

const mapSTP = state => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mapDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    processDemo: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
});

export default withRouter(connect(mapSTP, mapDTP)(SessionForm)); 