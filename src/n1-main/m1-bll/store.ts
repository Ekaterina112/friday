import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {loginReducer} from '../../n2-features/f1-auth/a1-login/login-reducer';

const rootReducer = combineReducers({
    login: loginReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// you can access the store at any time in the browser console
// @ts-ignore
window.store = store;