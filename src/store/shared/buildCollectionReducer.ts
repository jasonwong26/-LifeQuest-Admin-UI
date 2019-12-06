import { Reducer, AnyAction } from "redux";
import { ApiModel, CollectionState, CollectionActions } from "./_types";
import { getCollectionActionKey } from "./getCollectionActionKey";

export function buildCollectionReducer<TModel extends ApiModel>(collectionName: string) {
  const buildActionsMap = (collection: string) => {
    const map = new Map();
    for (const action in CollectionActions) {
      if (CollectionActions.hasOwnProperty(action)) {
        const val = getCollectionActionKey(collection, action);
        map.set(action, val);
      }
    }
    return map;  
  };
  
  const actions = buildActionsMap(collectionName);
  const initialState: CollectionState<TModel> = {
    data: [],
    errors: undefined,
    loading: false,
    saving: false,
    deleting: false
  };

  const reducer: Reducer<CollectionState<TModel>, AnyAction> = (state = initialState, action) => {
    switch (action.type) {
      case actions.get(CollectionActions.FETCH_REQUEST): {
        return { ...state, loading: true };
      }
      case actions.get(CollectionActions.FETCH_SUCCESS): {
        return { ...state, loading: false, data: action.payload };
      }
      case actions.get(CollectionActions.FETCH_ERROR): {
        return { ...state, loading: false, errors: action.payload };
      }
  
      case actions.get(CollectionActions.CREATE_REQUEST):
      case actions.get(CollectionActions.UPDATE_REQUEST): {
        return {...state, saving: true };
      }
  
      case actions.get(CollectionActions.CREATE_SUCCESS): {
        const newRecord: TModel = action.payload;
        const newState  = [...state.data, newRecord];
  
        return { ...state, saving: false, data: newState };
      }
      
      case actions.get(CollectionActions.UPDATE_SUCCESS): {
        const updated: TModel = action.payload;
        const newState  = state!.data.map(current => {
          return current.id === updated.id
            ? updated
            : current;
        });
  
        return { ...state, saving: false, data: newState };
      }
  
      case actions.get(CollectionActions.CREATE_ERROR):
      case actions.get(CollectionActions.UPDATE_ERROR): {
        return { ...state, saving: false, errors: action.payload };
      }
  
      case actions.get(CollectionActions.DELETE_REQUEST): {
        return {...state, deleting: true };
      }
  
      case actions.get(CollectionActions.DELETE_SUCCESS): {
        const deleted: { id: string; } = action.payload;
        const newState  = state!.data.filter((current: { id: string; }) => {
          return current.id !== deleted.id;
        });
  
        return { ...state, deleting: false, data: newState };
      }
  
      case actions.get(CollectionActions.DELETE_ERROR): {
        return {...state, deleting: false, errors: action.payload };
      }
  
      default: {
        return state;
      }
    }
  };

  return reducer;
}
