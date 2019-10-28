import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './TodoPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
