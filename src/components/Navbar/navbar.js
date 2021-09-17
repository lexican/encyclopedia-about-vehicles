import React from 'react'
import "./navbar.scss"
import {Link} from "react-router-dom"
export default function Navbar() {
    return (
        <div className="header">
            <Link className="brand" to="/">Ve.</Link>
        </div>
    )
}
