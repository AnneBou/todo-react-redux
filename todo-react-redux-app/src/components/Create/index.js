import { connect } from 'react-redux';
import { createTask } from '../../redux/actions/TodoActions';
import CreateView from './DeleteView';

const mapStateToProps = (state) => ({
  createTask: state.createTask
});

const mapDispatchToProps = (dispatch) => ({
  createTask: (data) => createTask(dispatch, data)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateView);