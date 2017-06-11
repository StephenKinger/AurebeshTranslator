import React, {
  Component,
  PropTypes
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';

class About extends Component {

  state = {
    animated: true,
    viewEntersAnim: true
  };

  componentDidMount() {
    const { enterAbout } = this.props;
    enterAbout();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    const { leaveAbout } = this.props;
    leaveAbout();
  }

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <h1>
          About
        </h1>
        <h2>
          How works the Aurebesh Generator
        </h2>
        <p>
          This generator permits to tranlate in Aurebesh alphabet your text.
          You can generate an image of your text and then download it.
        </p>
        <h2>
          Who am i
        </h2>
        <p>
          I am Stephen Kinger, a french Sw engineer even if my name seems to be
          american.
          I did this translator because i didn't find one which permit to
          generate image from the text written and also to play.<br/>
          You can find the source code on <a href="https://gihub.com/StephenKinger">my github repository</a><br/>
        You can also visit my blog <a href="https://www.itsatrap.tech">It's A Trap</a> (written in french) where I provide some tricks on different subjects as Raspberry management, etc.
        </p>
        <h2>
          Stack used for this translator
        </h2>
        <p>
          The main framework used for this application lean on ReactJS.<br/>
          The starter pack used is<a href="https://github.com/MacKentoch/react-redux-bootstrap-webpack-starter"> https://github.com/MacKentoch/react-redux-bootstrap-webpack-starter</a><br/>
          I used also different frameworks and libraries as :<br/>
          - fontawesome<br/>
          - html2canvas<br/>
          I used also fonts available at <a href=" http://www.fontspace.com">fontspace</a> then transformed with <a href="http://www.font2web.com">font2web</a><br/>

        </p>
      </div>
    );
  }
}

About.propTypes= {
  currentView:  PropTypes.string.isRequired,
  enterAbout:   PropTypes.func.isRequired,
  leaveAbout:   PropTypes.func.isRequired
};

export default About;
