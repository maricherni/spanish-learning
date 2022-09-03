import {configureStore} from '@reduxjs/toolkit';
//reducer
import body from './slices/vocabulario/bodyParts'

export default configureStore({
    reducer:{
        body
    }
});