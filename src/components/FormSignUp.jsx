import Button from '@mui/material/Button';

function FormSignUp() {
    return (
        <form>
            <label>Nombre</label>
            <input type="text" />
            <label>Apellido</label>
            <input type="text" />
            <label>Correo electrónico</label>
            <input type="email" />
            <label>Promociones</label>
            <input type="checkbox" />
            <label>Novedades</label>
            <input type="checkbox" />
            <Button variant="contained">Registrarse</Button>
        </form>
    )   
}

export default FormSignUp;