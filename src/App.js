import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header.component';
import HomePage from './Pages/Homepage/HomePage.page';
import ShopPage from './Pages/Shop/ShopPage.page';
import LoginPage from './Pages/Login/Login.page';
import { auth } from './Firebase/firebase.utils';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user });

            console.log('user: ', user);
        },)
    }

    // UNSAFE_componentWillMount() {
    //     this.unsubscribeFromAuth();
    // }



    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/login" component={LoginPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
