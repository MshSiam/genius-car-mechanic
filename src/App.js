import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import AuthProvider from "./context/AuthProvider"
import Booking from "./Pages/booking/Book/Booking"
import Home from "./Pages/Home/Home/Home"
import Login from "./Pages/Login/Login/Login"
import Notfound from "./Pages/NotFound/Notfound"
import Header from "./Pages/shared/Header"

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/booking/:serviceId">
              <Booking></Booking>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
