import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import * as generatorActions  from '../../redux/modules/generator';
import { Home }               from '../../views';


const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,
    isImageGenerated: state.generator.isImageGenerated
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterHome: viewsActions.enterHome,
      leaveHome: viewsActions.leaveHome,
      generateImage: generatorActions.generateImage
    },
    dispatch
  );
};

/*
  without bindActionCreators:
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     enterHome: () => dispatch(viewsActions.enterHome()),
//     leaveHome: () => dispatch(viewsActions.leaveHome())
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
