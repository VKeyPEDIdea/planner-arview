import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditEvent from "./pages/EditEvent/EditEvent";
import NewEvent from "./pages/NewEvent/NewEvent";
import Planner from "./pages/Planner/Planner";

function App() {
  return (
    <div className="App">
			<BrowserRouter>
				<Switch>
					<Route path='/editEvent' component={EditEvent}/>
					<Route path='/createEvent' component={NewEvent} />
					<Route path='/' component={Planner}/>
				</Switch>		
			</BrowserRouter>

    </div>
  );
}

export default App;
