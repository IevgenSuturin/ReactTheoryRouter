import React, {Component} from 'react'
import './App.scss'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {
  state = {
    isLoggedIn: false
  }
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink 
                to="/" 
                exact 
                activeClassName={'wfm-active'}  
              >Home</NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                exact
                activeStyle={{
                  color: 'blue'
                }}  
              >About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars'
                // ,
                // search: '?a=1&b=2',
                // hash: 'wfm-hash'
              }} exact>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>
        <div style={{textAlign: 'center'}}>
           <h3>Is Logged In {this.state.isLoggedIn ? 'TRUE' : 'FALSE'}</h3>
           <button onClick={() => this.setState({isLoggedIn: true})}>Login</button>
        </div>

        <hr/>

        <Switch>
        {/* localhost:3000 */}
            <Route path="/" exact render={() => <h1>Home page</h1>} />
            {this.state.isLoggedIn ? <Route path="/about" component={About} /> : null }
            <Route path="/cars/:name" component={CarDetail} />
            <Route path="/cars" component={Cars} />
            <Redirect to={'/'}/>
            {/* <Route render= {() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/> */}
        </Switch>
        {/* <About />
        <Cars /> */}
      </div>
    );
  }
}

export default App
