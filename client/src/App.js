import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage"
import Home from "./components/Home";
import DogCreate from "./components/DogCreate";
import Details from "./components/Details";
import { getDogs, getTemperamentsList,
  getBreeds, } from "./redux/actions";
import { useDispatch } from "react-redux";
import { useEffect }  from "react";

function App() {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(getDogs());
  dispatch(getTemperamentsList());
  dispatch(getBreeds());
}, [dispatch]);


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/create" component={DogCreate} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;