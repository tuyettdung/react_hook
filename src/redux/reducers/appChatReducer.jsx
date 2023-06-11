//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrComment:[
        {name:'Quan',content:'ahihi'},
        {name:'Vinh',content:'hello world'}
    ]

}

const appChatReducer = createSlice({
  name: 'appChatReducer',
  initialState,
  reducers: {
    addCommentAction:(state,action) => {
        let userComment = {...action.payload}
        state.arrComment.push(userComment);
    }
  }
});

export const {addCommentAction} = appChatReducer.actions

export default appChatReducer.reducer