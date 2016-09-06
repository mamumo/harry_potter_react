var React = require('react')
var CharactersSelect = require('./CharactersSelect')
var CharacterDetail = require('./CharacterDetail')



var CharactersBox = React.createClass({

  getInitialState: function(){
    return { characters: [], currentCharacter: null}
  },

  setCurrentCharacter: function(character){
    this.setState({currentCharacter: character})

  },
  
  componentWillMount: function(){
    console.log('Component will mount')
    var url = 'http://hp-api.herokuapp.com/api/characters'
    var request = new XMLHttpRequest()
    request.open("GET", url)
    request.onload = function(){
      if(request.status === 200) {
        var data = JSON.parse(request.responseText)
        this.setState({characters:data, currentCharacter:data[0]})
      }
    }.bind(this)
    request.send(null)

  },


  render: function(){
    console.log("Rendering...")
    return(
      <div>
      <h4> Harry Potter App</h4>
      <CharactersSelect characters={this.state.characters} setCurrentCharacter={this.setCurrentCharacter} />
      <CharacterDetail character={this.state.currentCharacter}/>
      </div>
      )

     
  }




})

module.exports = CharactersBox