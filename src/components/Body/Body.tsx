import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './Button/Button'
import './body.css'

export default function Body() {
    return (<div className='postBody'>
        <div className="title-blog">
            <span className="title">Amazing Heading</span>
            <span className="title">Text Right Here</span>
        </div>
        <span className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam nihil consectetur perspiciatis commodi ipsa distinctio atque provident doloremque reiciendis. Distinctio, accusantium perferendis et ipsam tenetur ex non fuga sed velit laborum, ad iure nemo nostrum officiis earum odio! Qui, consectetur cum! Rerum beatae reiciendis autem voluptates tenetur natus, neque delectus</span>
        <div className="btns">
            <Button />
            <Button />
        </div>
    </div>)
}