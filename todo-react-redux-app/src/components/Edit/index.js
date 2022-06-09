import { connect } from 'react-redux';
import { deleteTask } from '../../redux/actions/TodoActions';
import DeleteView from './DeleteView';

const mapStateToProps = (state) => ({
  deleteTask: state.deleteTask
});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (data) => deleteTask(dispatch, data)
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteView);