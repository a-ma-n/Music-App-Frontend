import './App.module.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

import HOC from './components/HOC/HOC'
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import Search from './components/Search/Search';
import Home from './components/Home/Home';

const App = () => {
    return <Router>
        <HOC>
        <Switch>
            <Route path="/play/:songId" >
                <MusicPlayer/>
            </Route>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/search" >
                <Search/>
            </Route>  
        </Switch>
        </HOC>
        </Router> 
}
// react uses local host 3000 by default

export default App