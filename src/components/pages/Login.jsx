
const Login = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Formulario enviados')
    }

    return (
    <div className="pt-16 max-w-200 m-auto">

        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Correo electrónico" required/>
            <input type="password" name="password" placeholder="Contraseña" required/>
            <button type="submit">Ingresar</button>
        </form>
    </div>
  )
}

export default Login