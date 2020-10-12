import React from 'react'
import style from './contact.module.scss'

const Form = () => {
    return (
        <form className={style.form}>
            <input type="text" placeholder="nombre"/>
            <input type="mail" placeholder="ejemplo@MediaList.com"/>
            <textarea>¿Qué quieres contarme?</textarea>
        </form>
    )
}

export default Form
