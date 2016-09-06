var React = require('react')


var CharacterDetail = function(props){
    if(!props.character){
      return(
        <h4>No character picked</h4>
        )
    }
    return(
      <div>
      <h4> Selected Character: {props.character.name}</h4> 
      <h5> House: {props.character.house}</h5> 
      <h5> Patronous: {props.character.patronus} </h5>
      </div>

      )
  


}

module.exports = CharacterDetail