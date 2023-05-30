import './App.css';
import Container from '@mui/material/Container';
import FormSignUp from './components/FormSignUp';
import Typography from '@mui/material/Typography';

const handleSubmit = (valores) => {
  console.log("APPJS", valores)
}

function App() {
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align="center">Formulario Registro</Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
