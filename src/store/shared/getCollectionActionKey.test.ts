import { CollectionActions } from "./_types";
import { getCollectionActionKey } from "./getCollectionActionKey";

describe("getCollectionActionKey()", () => {
  test("FETCH_REQUEST", () => {
    const collection = "blogposts";
    const action = CollectionActions.FETCH_REQUEST;

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@blogposts/FETCH_REQUEST");
  });
  test("FETCH_SUCCESS", () => {
    const collection = "blogposts";
    const action = CollectionActions.FETCH_SUCCESS;

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@blogposts/FETCH_SUCCESS");
  });
  test("FETCH_ERROR", () => {
    const collection = "blogposts";
    const action = CollectionActions.FETCH_ERROR;

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@blogposts/FETCH_ERROR");
  });

  test("CREATE_REQUEST", () => {
    const collection = "blogposts";
    const action = CollectionActions.CREATE_REQUEST;

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@blogposts/CREATE_REQUEST");
  });
  test("CREATE_SUCCESS", () => {
    const collection = "blogposts";
    const action = CollectionActions.CREATE_SUCCESS;

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@blogposts/CREATE_SUCCESS");
  });
  test("CREATE_ERROR", () => {
    const collection = "blogposts";
    const action = CollectionActions.CREATE_ERROR;

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@blogposts/CREATE_ERROR");
  });

  test("UPDATE_REQUEST", () => {
    const collection = "blogposts";
    const action = CollectionActions.UPDATE_REQUEST;

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@blogposts/UPDATE_REQUEST");
  });
  test("UPDATE_SUCCESS", () => {
    const collection = "blogposts";
    const action = CollectionActions.UPDATE_SUCCESS;

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@blogposts/UPDATE_SUCCESS");
  });
  test("UPDATE_ERROR", () => {
    const collection = "blogposts";
    const action = CollectionActions.UPDATE_ERROR;

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@blogposts/UPDATE_ERROR");
  });

  test("DELETE_REQUEST", () => {
    const collection = "blogposts";
    const action = CollectionActions.DELETE_REQUEST;

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@blogposts/DELETE_REQUEST");
  });
  test("DELETE_SUCCESS", () => {
    const collection = "blogposts";
    const action = CollectionActions.DELETE_SUCCESS;

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@blogposts/DELETE_SUCCESS");
  });
  test("DELETE_ERROR", () => {
    const collection = "blogposts";
    const action = CollectionActions.DELETE_ERROR;

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@blogposts/DELETE_ERROR");
  });

  test("sanity check for different collection", () => {
    const collection = "characters";
    const action = CollectionActions.FETCH_REQUEST;

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@characters/FETCH_REQUEST");
  });

  test("string overload", () => {
    const collection = "characters";
    const action = "FETCH_REQUEST";

    const output = getCollectionActionKey(collection, action);
    expect(output).toBe("@@characters/FETCH_REQUEST");
  });

});
