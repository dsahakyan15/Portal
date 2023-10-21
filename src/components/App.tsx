import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header'
import Body from './Body/Body'
import './app.css'

export default function App(){
    return (<div className='app'>
        <Header/>
        <Body/>
    </div>)
}