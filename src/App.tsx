import AppContext from './context/AppContext';
import Routes from './routes/router';
function App() {
  return (
    <AppContext>
      <Routes />
    </AppContext>
  );
}

export default App;
