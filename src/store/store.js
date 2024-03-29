import { configureStore } from '@reduxjs/toolkit'

import commonReducer from './commonReducer'

export const store = configureStore(
  {
    'reducer': { 'common': commonReducer },
  },
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
