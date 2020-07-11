import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'

import classes from './NavigationItems.module.css'

const NavigationItems = props => (
<ul className={classes.NavigationItems}>
    <NavigationItem link='/' exact
    // active don't need this class because of NavLink
    >Burger Builder</NavigationItem>
    <NavigationItem link='/orders' >Orders</NavigationItem>
   {!props.isAuthenticated ? 
   <NavigationItem link='/auth' >Authenticate</NavigationItem> : 
   <NavigationItem link='/logout' >Logout</NavigationItem> }
</ul>
)

export default NavigationItems