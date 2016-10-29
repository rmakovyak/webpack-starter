import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const App = props => (
  <div>
    The dog says: {props.message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

ReactDOM.render(<App message=`App component` />, document.querySelector('.app'));
