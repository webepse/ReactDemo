import React, {Component, Fragment} from 'react';
import './App.css'
import Membre from './components/Membre'

class App extends Component {

  render() { 
    const {title} = this.props
    return(
        <Fragment>
          <div className="App">
            <h1>{this.props.title}</h1>
            <h2>{title}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut recusandae adipisci quaerat quae, eveniet voluptatem voluptates atque libero voluptate necessitatibus beatae rerum hic debitis cum, deserunt dolorem doloremque nemo error modi molestias rem ex quisquam illum! Accusantium, molestiae? Error corporis, excepturi cumque incidunt quam veritatis sint molestias deleniti ipsam fugit ipsum amet laborum omnis illo est voluptas, eveniet eum ducimus, earum obcaecati. Quo cum earum quae, quos ipsa, facere veniam numquam ipsum, ullam voluptate assumenda esse iusto accusamus laborum! Sint quod commodi assumenda voluptatibus, ex nulla velit ducimus accusantium tempore ab a architecto quasi provident nisi tempora doloremque culpa ut?</p>
          </div>
          <div>test</div>
          <Membre nom="Batman" />
          <Membre nom="Catwoman" />
          <Membre nom="Superman" />
          <Membre nom="Wonder Woman" />
          <Membre nom="Ace">
            Je suis le Batdog
          </Membre>
        </Fragment>
      //React.createElement('div', {className: 'App'}, React.createElement('h1',null,'React App'))
    )
  }
}
 
export default App;