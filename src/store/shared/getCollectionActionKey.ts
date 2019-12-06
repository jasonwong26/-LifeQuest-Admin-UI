import { CollectionActions } from "./_types";

export function getCollectionActionKey (collection: string, action: string | CollectionActions) {
  return "@@" + collection + "/" + action;
}