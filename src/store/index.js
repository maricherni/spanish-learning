import {configureStore} from '@reduxjs/toolkit';
//reducer
import users from './slices/users';
import body from './slices/vocabulario/bodyParts'

export default configureStore({
    reducer:{
        users,
        body
    }
});