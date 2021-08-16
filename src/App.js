import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header.component';
import HomePage from './Pages/Homepage/HomePage.page';
import ShopPage from './Pages/Shop/ShopPage.page';
import LoginPage from './Pages/Login/Login.page';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import { setCurrentUser } from './Redux/User/user.actions';

class App extends React.Component {
    

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                    ...snapshot.data() 
                    });
                });
            }
            else {
                setCurrentUser(userAuth);
            }
        },);
    }

    UNSAFE_componentWillMount() {
        if(this.unsubscribeFromAuth instanceof Function) {
            this.unsubscribeFromAuth();
        }
    }



    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route 
                        exact 
                        path="/login" 
                        render={() => 
                            this.props.currentUser 
                            ? ( <Redirect to="/" /> ) 
                            : ( <LoginPage /> )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
