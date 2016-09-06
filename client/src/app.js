var React = require('react');
var ReactDOM = require('react-dom');
var CharactersBox = require('./components/CharactersBox')

window.onload = function(){
  ReactDOM.render(
    <CharactersBox />,
    document.getElementById('app')
  );
}
