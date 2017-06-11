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

  _handleOnChange(e) {
    if (e) {
     e.preventDefault();
    }
    let textToTranslate = this.refs.yourText.value;
    this.refs.yourTranslation.value = textToTranslate;
    console.log("Text:"+textToTranslate);
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
            Enter your text to translate
          </h1>
          <h1></h1>
          <p>
            <div className='row'>
              <div className="col-sm-6">
                <form className={styles.inputs} onSubmit={this._handleValidSubmit.bind(this)}>
                  <div className='form-group'>
                    <label for="textToTranslate">Text To Translate</label>
                    <textarea type="text" rows="10" className={styles.fields+' form-control'} ref="yourText" id="yourText" placeholder="Enter your text to translate" onChange={this._handleOnChange.bind(this)}/>
                  </div>
                </form>
              </div>
              <div className="col-sm-6">
                <form className={styles.inputs}>
                  <div className={styles.fields+' form-group'}>
                    <label for="yourLastName">Text Translated in Aurebesh</label>
                    <textarea readlonly type="text" rows="10" className={styles.fields+' '+styles.translated+' form-control'} ref="yourTranslation" id="yourTranslation" placeholder="Get your text translated"/>
                  </div>
                </form>
              </div>
          </div>
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
