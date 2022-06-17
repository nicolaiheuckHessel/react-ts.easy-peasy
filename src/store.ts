import { createStore, createTypedHooks } from "easy-peasy";
import { model, ModelType } from "./StoreModel";

// const { useActions, useStore, useDispatch } = createTypedHooks<StoreModel>();

// export { useActions, useDispatch, useStore };

// const store = createStore(model);

// export default store;


export const typedHooks = createTypedHooks<ModelType>();

const store = createStore(model);

export default store;
