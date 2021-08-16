import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header.component';
import HomePage from './Pages/Homepage/HomePage.page';
import ShopPage from './Pages/Shop/ShopPage.page';
import LoginPage from './Pages/Login/Login.page';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: snapshot.id,
                        ...snapshot.data()
                    });
                });
            }
            else {
                this.setState({ currentUser: userAuth });
            }
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
