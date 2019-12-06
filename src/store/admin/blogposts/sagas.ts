import { put, takeEvery, takeLatest } from "redux-saga/effects";
import shortid from "shortid";

import { PayloadAction, CollectionActions, getCollectionActionKey } from "../../shared";
import { BlogPost } from "./_types";
import * as Actions from "./actions";

const collectionName = "blogposts";

function delay(milliseconds: number) { 
  return new Promise(resolve => setTimeout(resolve, milliseconds)); 
}

function* handleFetch() {
  yield put(Actions.fetchSuccess([]));
}

function* handleCreate(action: PayloadAction<BlogPost>) {
  const newRecord = action.payload;
  newRecord.id = shortid.generate();
  newRecord.created = new Date().getTime();
  newRecord.lastUpdated = newRecord.created;

  yield delay(50);
  yield put(Actions.createSuccess(newRecord));
}

function* handleUpdate(action: PayloadAction<BlogPost>) {
  const updated = action.payload;
  updated.lastUpdated = new Date().getTime();

  yield delay(50);
  yield put(Actions.updateSuccess(updated));
}

function* handleDelete(action: PayloadAction<BlogPost>) {
  const deleted = action.payload;
  yield delay(50);
  yield put(Actions.deleteSuccess(deleted));
}

export const sagas = [
  takeEvery(getCollectionActionKey(collectionName, CollectionActions.FETCH_REQUEST), handleFetch),
  takeLatest(getCollectionActionKey(collectionName, CollectionActions.CREATE_REQUEST), handleCreate),
  takeLatest(getCollectionActionKey(collectionName, CollectionActions.UPDATE_REQUEST), handleUpdate),
  takeLatest(getCollectionActionKey(collectionName, CollectionActions.DELETE_REQUEST), handleDelete)
];
