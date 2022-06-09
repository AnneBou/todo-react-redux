import { connect } from 'react-redux';
import { validateAccount } from '../../redux/actions/TodoActions';
import HomepageView from './HomepageView';

const mapStateToProps = (state) => ({
  auth: state.auth
});
const mapDispatchToProps = (dispatch) => ({
  validateAccount: (data) => validateAccount(dispatch, data)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageView);
