import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import HomepageView from '../pages/Homepage';

const RootRouter = (props) => {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Fragment>
        <section className="landing">
            <Route exact path="/" component={HomepageView} />
            <Route exact path={routes.HOMEPAGE} component={Homepage} />
        </section>
      </Fragment>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(RootRouter);
