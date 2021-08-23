import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.styles.scss';
import { ReactComponent as Logo } from '../../Assets/crown.svg'
import { auth } from '../../Firebase/firebase.utils';
import CartIcon from '../CartIcon/CartIcon.component';
import CartDropdown from '../CartDropdown/CartDropdown.component';
import { selectCurrentUser } from '../../Redux/User/user.selector';
import { selectHideCartDropdown } from '../../Redux/Cart/cart.selectors';


const Header = ({ currentUser, hideCartDropdown }) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>

            <div className='options'>
                <Link className='option' to='/' >HOME</Link>
                <Link className='option' to='/shop' >SHOP</Link>
                {
                    currentUser 
                    ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className="option" to='/login' >SIGN IN</Link>
                }
                <CartIcon />
            </div>
            { !hideCartDropdown && <CartDropdown /> }
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    hideCartDropdown: selectHideCartDropdown(state)
})

export default connect(mapStateToProps)(Header);