import {call,all,put,takeLatest} from 'redux-saga/effects';

import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesFailed, fetchCategoriesSuccess } from './categories.action';

import { CATEGORIES_ACTION_TYPES } from './categories.types';

export function* fetchCategoriesAsync() {
    try{
        const categories= yield call(getCollectionAndDocuments);
        yield put(fetchCategoriesSuccess(categories));
      }catch(err){
       yield put(fetchCategoriesFailed(err));
      }
} 

export function* onFetchCatgories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesAsync);
}

export function* categoriesSaga() {
    yield all([call(onFetchCatgories)]);
}