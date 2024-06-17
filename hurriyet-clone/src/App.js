import { useRoutes } from 'react-router-dom';
import routes from './routes';
import './App.css';

function App() {

  const getRoutes = useRoutes(routes)

  return (
    <>
     {getRoutes}
    </>
  );
}

export default App;
