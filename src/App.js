import React, {Component, Fragment} from 'react';
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'

const league = {
  membre1: {
    nom: 'Batman',
    age: 45
  },
  membre2: {
    nom: 'Superman',
    age: 45
  },
  membre3: {
    nom: 'Wonder Woman',
    age: 79
  },
  membre4: {
    nom: 'Catwoman',
    age: 30
  }
}
class App extends Component {
  state = {
    league : league,
    isShow: false
  }

  handleClick = (nb) => {
    const league = {...this.state.league}
    league.membre1.age += nb
    this.setState({league:league})
  }

  handleShow = () => {
    const isShow = !this.state.isShow // ! retourner l'inverse (système de toggle)
    this.setState({isShow})
  }

  handleChange = (event,id) => {
    const league = {...this.state.league}
    const nom = event.target.value
    league[id].nom = nom
    this.setState({league:league})
  }

  hideName = (id) => {
    //console.log(id)
    const league = {...this.state.league}

    league[id].nom = 'X'

    this.setState({league})
  }

  render() { 

    const liste = Object.keys(this.state.league).map(membre => {
      return (
        <Membre 
          key={membre} 
          hideName = {() => this.hideName(membre) }
          handleChange = {(event) => this.handleChange(event,membre)}
          age={this.state.league[membre].age} 
          nom={this.state.league[membre].nom} />
      )
    })

    return(
        <Fragment>
          <div className="App">
            <h1>{this.props.title}</h1>
            {liste}
          </div>
        </Fragment> 
    )
  }
}
 
export default App;