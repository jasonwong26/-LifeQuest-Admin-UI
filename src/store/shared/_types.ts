import {Action} from "redux";
import { ApiResponse } from "@developermouse/ui-react-core";

// TODO: delete this after publishing new version of LifeQuest-React-Core

export enum AppPages {
  None        =  0,
  Home        =  1,
  Profile     =  2,
  DailyQuests =  4,
  YourQuests  =  8,
  Cutscenes   = 16,
  History     = 32,
  Feedback    = 64
}

export enum DataStatus {
  PENDING = "@@/PENDING",
  LOADING = "@@data/LOADING",
  READY = "@@data/READY",
  SAVING = "@@data/SAVING",
  DELETING = "@@data/DELETING"
}

export interface PayloadAction<T> extends Action {
  payload: T
}

export interface ApiModel extends ApiResponse {
  id: string
  created: number,
  lastUpdated: number
}

export interface CollectionState<TModel extends ApiModel> {
  data: TModel[],
  loading: boolean,
  saving: boolean,
  deleting: boolean,
  errors?: string
}

export enum CollectionActions {
  FETCH_REQUEST = "FETCH_REQUEST",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",

  CREATE_REQUEST = "CREATE_REQUEST",
  CREATE_SUCCESS = "CREATE_SUCCESS",
  CREATE_ERROR = "CREATE_ERROR",

  UPDATE_REQUEST = "UPDATE_REQUEST",
  UPDATE_SUCCESS = "UPDATE_SUCCESS",
  UPDATE_ERROR = "UPDATE_ERROR",

  DELETE_REQUEST = "DELETE_REQUEST",
  DELETE_SUCCESS = "DELETE_SUCCESS",
  DELETE_ERROR = "DELETE_ERROR"
}