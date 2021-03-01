import './App.css';
import Router from '../Components/Routers/Routers'
import AdminRouter from '../Admin-Area/Router'
function App() {
  return (
    <div className="App">
      <Router/>
      <AdminRouter/>
    </div>
  );
}

export default App;
