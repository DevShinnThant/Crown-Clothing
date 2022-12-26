import { createStore } from "redux";
import logger from "redux-logger";
import { compose,applyMiddleware } from "redux";

import { rootReducer } from "./root-reducer";

const loggerMiddleWare = (store) => (next) => (action) => {
    if(!action.type){
        return next()
    };

    console.log('type: ',action.type);
    console.log('payload: ',action.payload);
    console.log('current State: ',store.getState());

    next(action);

    console.log('next state: ',store.getState());
};

const middleWares = [loggerMiddleWare];

const composedEnhancers = compose(applyMiddleware(...middleWares))


export const store = createStore(rootReducer,undefined,composedEnhancers)