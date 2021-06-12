import React from 'react'
import ob from './Text.module.css'

const Text = (props) => {
    return (
            <li><a className={ob.item} href="#">{props.eq}</a></li>
    )
}


export default Text;