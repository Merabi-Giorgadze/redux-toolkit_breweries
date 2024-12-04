import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './users/user.slice'
import { breweryAPI } from './brewery/brewery.api'

//state
const rootReducer = combineReducers({
  userReducer,
  [breweryAPI.reducerPath]: breweryAPI.reducer
})
export type RootState = ReturnType<typeof rootReducer>

//core
export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(breweryAPI.middleware)

})

//action
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']