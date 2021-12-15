import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from "./reducers/rootReducer"

const middleware = [thunk]
const composeEnhancers =  compose

const makeStore:any = () => createStore(rootReducer,composeEnhancers(applyMiddleware(...middleware)))

export const wrapper = createWrapper(makeStore)