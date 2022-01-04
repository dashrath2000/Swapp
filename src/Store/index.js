import {applyMiddleware, combineReducers, createStore} from "redux";
import rootSaga from '../Saga';
import authReducer from '../Reducers/auth.reducer';
import createSagaMiddleware from "redux-saga";
import wordingReducer from '../Reducers/wording.reducer';
import EmailReducer from '../Reducers/Email.reducer';
const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    auth: authReducer,
    wording:wordingReducer,
    Email:EmailReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
