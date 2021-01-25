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
    league : league 
  }

  handleClick = (nb) => {
    const league = {...this.state.league}
    league.membre1.age += nb
    this.setState({league:league})
  }

  handleChange = (event) => {
    const league = {...this.state.league}
    const nom = event.target.value
    league.membre1.nom = nom
    this.setState({league:league})
  }

  render() { 
    const {title} = this.props
    const nb = 5
    const liste = Object.keys(this.state.league).map(membre => {
      return (
        <Membre key={membre} age={this.state.league[membre].age} nom={this.state.league[membre].nom} />
      )
    })


    return(
        <Fragment>
          <div className="App">
            <h1>{this.props.title}</h1>
            <h2>{title}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut recusandae adipisci quaerat quae, eveniet voluptatem voluptates atque libero voluptate necessitatibus beatae rerum hic debitis cum, deserunt dolorem doloremque nemo error modi molestias rem ex quisquam illum! Accusantium, molestiae? Error corporis, excepturi cumque incidunt quam veritatis sint molestias deleniti ipsam fugit ipsum amet laborum omnis illo est voluptas, eveniet eum ducimus, earum obcaecati. Quo cum earum quae, quos ipsa, facere veniam numquam ipsum, ullam voluptate assumenda esse iusto accusamus laborum! Sint quod commodi assumenda voluptatibus, ex nulla velit ducimus accusantium tempore ab a architecto quasi provident nisi tempora doloremque culpa ut?</p>
          </div>
          <div>test</div>
          <input 
          value={this.state.league.membre1.nom}
          onChange={this.handleChange}
          type="text"/>
          <Membre 
          age={this.state.league.membre1.age}
          nom={this.state.league.membre1.nom} />
          <Membre 
          age={this.state.league.membre2.age}
          nom={this.state.league.membre2.nom} />
          <Membre 
          age={this.state.league.membre3.age}
          nom={this.state.league.membre3.nom} />
          <Membre 
          age={this.state.league.membre4.age}
          nom={this.state.league.membre4.nom} />   
          <Membre 
          age="2"
          nom="Ace">
            Je suis le batdog  
          </Membre>
          <Button 
          nb={nb}
          vieillir={()=> this.handleClick(nb)} />
          <h1>Rendu avec boucle</h1>
          {liste}
        </Fragment>
      //React.createElement('div', {className: 'App'}, React.createElement('h1',null,'React App'))
    )
  }
}
 
export default App;