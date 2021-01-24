import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <a class="navbar-brand text-white click1" href="#">React List</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item click">
                            <Link to="/harilingkungan" className="nav-link text-white">Hari Lingkungan Hidup</Link>
                        </li>
                        <li class="nav-item click">
                            <Link to="/Daftar" className="nav-link text-white">Daftar belanja</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;