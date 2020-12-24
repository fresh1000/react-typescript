// import { Counter } from './Counter'
import './App.css'
// import { Accordion } from './Accordion'
// import { Input } from './Input'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MoviesList } from './movies/MoviesList'
import { MovieDetail } from './movies/MovieDetail'

function App(): JSX.Element {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/movie/:id">
              <MovieDetail/>
            </Route>
            <Route path="/">
              {/* <Counter/>
              <Accordion/>
              <Input/> */}
              <MoviesList/>
            </Route>
          </Switch>
        </Router>
    </div>
  )
}

export default App
