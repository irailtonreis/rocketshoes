import Reactotron from 'reactotron-react-js';
import reactotronSaga from 'reactotron-redux-saga';
import {
  reactotronRedux
} from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();
  console.tron = tron;
}