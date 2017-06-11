import moment from 'moment';
const dateFormat = 'DD/MM/YYYY HH:mm';

// /////////////////////
// constants
// /////////////////////
const GENERATE_IMAGE  = 'GENERATE_IMAGE';
const DOWNLOAD_IMAGE  = 'DOWNLOAD_IMAGE';


// /////////////////////
// reducer
// /////////////////////
const initialState = {
  isImageGenerated:  false
};

export default function (state = initialState, action) {
  switch (action.type) {

  case GENERATE_IMAGE:
      return {
        ...state,
        isImageGenerated:  action.isImageGenerated
      };
  default:
    return state;
  }
}


// /////////////////////
// action creators
// /////////////////////
export function generateImage() {
  return {
    type:         GENERATE_IMAGE,
    isImageGenerated:  true
  };
}
