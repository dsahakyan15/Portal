import React from 'react'
import ReactDOM from 'react-dom/client'
import './header.css'


export default function Header() {
    return (<div className='header'>
        <h1 className='logo'>Logotype</h1>
        <div className="nav">
            <span className="nav-item">Link 1</span>
            <span className="nav-item">Link 2</span>
            <span className="nav-item">Link 3</span>
            <span className="nav-item">Link 4</span>
            <span className="nav-item">example@website.com</span>
            <span className="nav-item">EN</span>
        </div>
    </div>)
}