
import { ChangeEvent, useState } from 'react'
import '../styles/custom-styles.css'

export const Forms = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

    const {name, email, password1, password2} = registerData
    

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        
        setRegisterData( prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))

    }

    const onSudmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(registerData)
    }

    return (
        <div>
            <h1>Forms Page</h1>
            <hr />     
            <form
                onSubmit={ (ev) => onSudmit(ev) }
            >
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={ onChange }
                />
                <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={ onChange }
                />
                <input
                    type='password'
                    placeholder='Password 1'
                    name='password1'
                    value={password1}
                    onChange={ onChange }
                />
                <input
                    type='password'
                    placeholder='Password 2'
                    name='password2'
                    value={password2}
                    onChange={ onChange }
                />
                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}
