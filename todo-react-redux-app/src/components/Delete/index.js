import { connect } from 'react-redux';
import { logout } from '../../redux/actions/AuthActions';
import DeleteView from './DeleteView';

const mapDispatchToProps = (dispatch) => ({
  delete: () => delete(dispatch)
});

export default connect(null, mapDispatchToProps)(DeleteView);
