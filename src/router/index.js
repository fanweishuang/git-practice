import React from 'react'
import { HashRouter, Switch, NavLink, Route, Redirect } from 'react-router-dom'
import My from '../pages/my'
import Your from '../pages/your'
import NoFind from '../pages/noFind'


export default function Router() {
    return (
        <HashRouter>
            <NavLink to='my'>我的</NavLink>
            <NavLink to='your'>你的</NavLink>

            <Switch>
                <Redirect exact from='/' to='/my'></Redirect>
                <Route exact path='/my' component={My}></Route>
                <Route exact path='/your' component={Your}></Route>
                <Route component={NoFind}></Route>
            </Switch>
        </HashRouter>
    )
}