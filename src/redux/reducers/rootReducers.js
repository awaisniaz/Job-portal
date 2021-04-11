import { combineReducers } from 'redux'
import postData from './postReducers'
import stepper from './stepReducer'
import ModelVisible from './modelReducer'
import singlePost from './singlePostReducer'
const rootReducers = combineReducers({
    post: postData,
    stepper: stepper,
    ModelVisible: ModelVisible,
    postdata: singlePost

})

export default rootReducers