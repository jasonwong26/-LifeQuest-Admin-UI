import { Reducer } from "react";
import { AnyAction } from "redux";
import { action } from "typesafe-actions";
import { ApiModel, CollectionActions, CollectionState } from "./_types";
import { getCollectionActionKey } from "./getCollectionActionKey";
import { buildCollectionReducer } from "./buildCollectionReducer";

let collection: string;
let reducer: Reducer<CollectionState<ApiModel>, AnyAction>;
let state: CollectionState<ApiModel>;

describe("buildCollectionReducer()", () => {
  beforeEach(() => {
    collection = "blogposts";
    reducer = buildCollectionReducer(collection);
    state = {
      data: [],
      loading: false,
      saving: false,
      deleting: false,
      errors: undefined
    };
  });
  test("action: FETCH_REQUEST", () => {
    const actionKey = getCollectionActionKey(collection, CollectionActions.FETCH_REQUEST);
    const actionInput = action(actionKey);

    const newState = reducer(state, actionInput);

    expect(newState.loading).toBeTruthy();
    expect(newState.saving).toBeFalsy();
    expect(newState.deleting).toBeFalsy();
  });
  test("action: CREATE_REQUEST", () => {
    const actionKey = getCollectionActionKey(collection, CollectionActions.CREATE_REQUEST);
    const actionInput = action(actionKey);

    const newState = reducer(state, actionInput);

    expect(newState.loading).toBeFalsy();
    expect(newState.saving).toBeTruthy();
    expect(newState.deleting).toBeFalsy();
  });
  test("action: UPDATE_REQUEST", () => {
    const actionKey = getCollectionActionKey(collection, CollectionActions.UPDATE_REQUEST);
    const actionInput = action(actionKey);

    const newState = reducer(state, actionInput);

    expect(newState.loading).toBeFalsy();
    expect(newState.saving).toBeTruthy();
    expect(newState.deleting).toBeFalsy();
  });
  test("action: DELETE_REQUEST", () => {
    const actionKey = getCollectionActionKey(collection, CollectionActions.DELETE_REQUEST);
    const actionInput = action(actionKey);

    const newState = reducer(state, actionInput);

    expect(newState.loading).toBeFalsy();
    expect(newState.saving).toBeFalsy();
    expect(newState.deleting).toBeTruthy();
  });
  test("unrelated action does not trigger change", () => {
    const actionInput = action("UNRELATED_ACTION");

    const newState = reducer(state, actionInput);

    expect(newState.loading).toBeFalsy();
    expect(newState.saving).toBeFalsy();
    expect(newState.deleting).toBeFalsy();
  });
});
