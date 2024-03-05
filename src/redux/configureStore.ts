/** Vendor */
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

/** Custom Reducers */
import initialState from "./reducers/initialState";
import rootReducer from "./reducers/index";

/** Types */
import type { ThunkAction } from "redux-thunk";

import type {
  Action,
  AnyAction,
  DevToolsEnhancerOptions,
  Middleware,
} from "@reduxjs/toolkit";

declare module "redux" {
  interface Dispatch<A extends Action = AnyAction> {
    <S, E, R>(asyncAction: ThunkAction<R, S, E, A>): R;
  }
}

const middleware: Array<Middleware> = [thunk];

const devToolsEnhancer: DevToolsEnhancerOptions = {
  trace: true,
  traceLimit: 25,
};

const env = import.meta.env.MODE as string;

const store = configureStore({
  devTools: env === "development" ? devToolsEnhancer : false,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  },
  preloadedState: initialState,
  reducer: rootReducer,
});

// Infer the `IRootState` and `IAppDispatch` types from the store itself
export type IRootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type IAppDispatch = typeof store.dispatch;

export type { AnyAction };

export default store;
