
import LoginComponent from "./components/AuthComponent/LoginComponent";
import classes from './app.module.css';

function App() {
  return (
    <div className={classes.App}>
        <LoginComponent path="/login" />
    </div>
  );
}



export default App;
