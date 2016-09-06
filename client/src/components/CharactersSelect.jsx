var React = require('react')

var CharactersSelect = React.createClass({

  getInitialState: function(){
    return{ selectedIndex: null}
  },

  handleChange: function(e){
    var newIndex = e.target.value
    this.setState({selectedIndex: newIndex})
    this.props.setCurrentCharacter(this.props.characters[newIndex])
  },

  render: function(){
    var characters = this.props.characters.map(function(character, index){
      return (
        <option value={index} key={index}>
        {character.name}
        </option>
        )
    }.bind(this))
    return(
      <select value={this.state.selectedIndex} onChange={this.handleChange}>
      {characters}
      </select>
      )
  }

})

module.exports = CharactersSelect