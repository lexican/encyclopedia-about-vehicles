import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailsPage from './pages/details';
import Home from './pages/Home/home';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/result/:name' component={DetailsPage} />
			</Switch>
		</Router>
	);
}

export default App;
