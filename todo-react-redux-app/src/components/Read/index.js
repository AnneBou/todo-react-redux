import { connect } from 'react-redux';
import { createTask } from '../../redux/actions/TodoActions';
import ReadView from './ReadView';

const mapStateToProps = (state) => ({
  values: state.todo
});

const mapDispatchToProps = (dispatch) => ({
  createTask: (data) => createTask(dispatch, data)
});

export default connect(mapStateToProps, mapDispatchToProps)(ReadView);