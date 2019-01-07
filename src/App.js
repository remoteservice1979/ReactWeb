import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import NotFoundComponent  from './NotFoundComponent';
import Home  from './containers/Home';
import Header  from './containers/Header';
import Calculator from './containers/Calculator';
import createBrowserHistory from 'history/createBrowserHistory';
import Routes from './constants/Routes';
import { Provider } from 'react-redux';
import store from './constants/Store';

const history = createBrowserHistory();
export default () => (
    <Provider store={store}>
        <Router>
            <Routes history={history} />
        </Router>
    </Provider>
);

// class App extends Component {
//   render() {
//     return (
//     <Provider store={store} key="provider">
//       <Router>
//         <div>
//           <Header />
//           <Switch>
//             <Route exact path='/Date' component={NotFoundComponent}></Route>
//             <Route exact path='/' component={Home}></Route>
//             <Route exact path='/Calculator' component={Calculator}></Route>
//
//           </Switch>
//         </div>
//
//       </Router>
//     </Provider>
//     );
//   }
// }
//
// export default App;
