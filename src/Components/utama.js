  
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Harilingkungan from './harilingkungan'
import Daftar from './daftar'

const utama = () => (
    <Switch>
        <Route exact path="/" component={Harilingkungan} />
        <Route path="/Harilingkungan" component={Harilingkungan} />
        <Route path="/Daftar" component={Daftar} />
    </Switch>
)
export default utama;