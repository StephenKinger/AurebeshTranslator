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

  _handleValidSubmit(e) {
    if (e) {
     e.preventDefault();
    }
    let firstName = this.refs.yourFirstName.value;
    let lastName = this.refs.yourLastName.value;
    console.log("firstName:"+firstName);
    console.log("lastName:"+lastName);
  }

  render() {
    const { animated, viewEntersAnim } = this.state;
    const styles = require('./home.style.scss');
    console.log(styles.title);
    return(
      <div
        key="homeView"
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <Jumbotron>
          <h1 className={styles.title}>
            Generate your Star Wars Name
          </h1>
          <h1></h1>
          <p>
            <form className={styles.inputs+' form-inline'} onSubmit={this._handleValidSubmit.bind(this)}>
              <div className='form-group'>
                <label for="yourFirstName">Fist Name</label>
                <input type="text" className={styles.fields+' form-control'} ref="yourFirstName" id="yourFirstName" placeholder="Enter your first name"/>
              </div>
              <div className={styles.fields+' form-group'}>
                <label for="yourLastName">Last Name</label>
                <input type="text" className={styles.fields+' form-control'} ref="yourLastName" id="yourLastName" placeholder="Enter your last name"/>
              </div>
              <div className={styles.fields+' form-group'}>
                <button type="submit" className='btn btn-primary'>
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
