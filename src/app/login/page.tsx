import React from 'react'
import { AuthButtonServer } from '../components/auth-button-server'

export default function login() {
    return (
        <section className='grid place-content-center min-h-screen'>

            <h1 className='text-xl font-bold text-center'>Inicia sesion en Twitter Clone</h1>
            <AuthButtonServer />
        </section>
    )
}
