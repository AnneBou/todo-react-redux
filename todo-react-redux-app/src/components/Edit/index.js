import { connect } from 'react-redux';
import { editTask } from '../../redux/actions/TodoActions';
import EditView from './DeleteView';

const mapStateToProps = (state) => ({
  editTask: state.editTask
});

const mapDispatchToProps = (dispatch) => ({
  editTask: (data) => editTask(dispatch, data)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditView);