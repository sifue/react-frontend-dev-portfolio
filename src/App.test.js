import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './App';

beforeEach(() => {
  jest.spyOn($, 'ajax').mockImplementation(() => {});
});

afterEach(() => {
  $.ajax.mockRestore();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
