import { NEW_POST}  from './types'



export const createPost = post => dispatch => {
   
        dispatch({
          type: NEW_POST,
          payload: post
        })
  }
