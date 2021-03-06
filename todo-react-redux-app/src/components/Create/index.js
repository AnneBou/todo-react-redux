import { connect } from 'react-redux';
import { createTask } from '../../redux/actions/TodoActions';
import CreateView from './CreateView';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  createTask: (data) => createTask(dispatch, data)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateView);