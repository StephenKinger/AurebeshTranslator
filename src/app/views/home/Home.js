import React, {
  Component,
  PropTypes
}                     from 'react';
import {Jumbotron}    from '../../components';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import { Link }       from 'react-router';

class Home extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterHome } = this.props;
    enterHome();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { leaveHome } = this.props;
    leaveHome();
  }

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        key="homeView"
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <Jumbotron>
          <h1 calssName='title'>
            Generate your Star Wars Name
          </h1>
          <h1></h1>
          <p>
            <form className="form-inline">
              <div className="form-group">
                <label for="yourFirstName">Fist Name  </label>
                <input type="text" className="form-control" id="yourFirstName" placeholder="Enter your first name"/>
                <label for="yourLastName">Last Name</label>
                <input type="text" className="form-control" id="yourLastName" placeholder="Enter your last name"/>
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-space-shuttle"></i>
                  Generate
                </button>
              </div>
            </form>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

Home.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterHome:    PropTypes.func.isRequired,
  leaveHome:    PropTypes.func.isRequired
};

export default Home;
