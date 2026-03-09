import {Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import StateDetails from './components/StateDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <Header />
    <main className="main-content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/state/:stateCode" component={StateDetails} />
        <Route component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </div>
)

export default App
