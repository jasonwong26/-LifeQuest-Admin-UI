import { action } from "typesafe-actions";
import { BlogPost } from "./_types";
import { CollectionActions, getCollectionActionKey } from "../../shared";

const collectionName = "blogposts";

export const fetchRequest = () => action(getCollectionActionKey(collectionName, CollectionActions.FETCH_REQUEST));
export const fetchSuccess = (data: BlogPost[]) => action(getCollectionActionKey(collectionName, CollectionActions.FETCH_SUCCESS), data);
export const fetchError = (message: string) => action(getCollectionActionKey(collectionName, CollectionActions.FETCH_ERROR), message);

export const createRequest = (data: BlogPost) => action(getCollectionActionKey(collectionName, CollectionActions.CREATE_REQUEST), data);
export const createSuccess = (data: BlogPost) => action(getCollectionActionKey(collectionName, CollectionActions.CREATE_SUCCESS), data);
export const createError = (message: string) => action(getCollectionActionKey(collectionName, CollectionActions.CREATE_ERROR), message);

export const updateRequest = (data: BlogPost) => action(getCollectionActionKey(collectionName, CollectionActions.UPDATE_REQUEST), data);
export const updateSuccess = (data: BlogPost) => action(getCollectionActionKey(collectionName, CollectionActions.UPDATE_SUCCESS), data);
export const updateError = (message: string) => action(getCollectionActionKey(collectionName, CollectionActions.UPDATE_ERROR), message);

export const deleteRequest = (data: BlogPost) => action(getCollectionActionKey(collectionName, CollectionActions.DELETE_REQUEST), data);
export const deleteSuccess = (data: BlogPost) => action(getCollectionActionKey(collectionName, CollectionActions.DELETE_SUCCESS), data);
export const deleteError = (message: string) => action(getCollectionActionKey(collectionName, CollectionActions.DELETE_ERROR), message);
