import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Post from '../post/post'

const Routes = props => {
    return (
        <Router history={hashHistory}>
            <Route path="/posts" component={Post}/>
            <Redirect from="*" to="/posts"/>
        </Router>
    )
}

export default Routes