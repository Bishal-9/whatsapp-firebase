import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="app">
      {
        !user ? (
          <h1>Login Screen</h1>
        ) : (
          <div className="app__body">
            <Router>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Sidebar />
                  <Chat />
                </Route>

                <Route path="/">
                  <Sidebar />
                  <Chat />
                </Route>
              </Switch>
            </Router>
          </div>
        )
      }
    </div>
  );
}

export default App;
