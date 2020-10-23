import React from 'react'
import style from './contact.module.scss'

const Form = () => {
    return (
        <form className={style.form}>
            <input className={style.name} type="text" placeholder="nombre"/>
            <input className={style.mail} type="mail" placeholder="ejemplo@MediaList.com"/>
            <textarea rows={8} className={style.description}>¿Qué quieres contarme?</textarea>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form
