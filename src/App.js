import React, {useState, useContext} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import Deshbord from './components/dashbord/Deshbord';
import Form from './components/form/Form';
import Header from './components/header/Header'
import Login from './components/login/Login';
import { FirebaseContext } from './components/context/firebase';

console.clear();

function App() {

  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignup = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push('/');
          })
      )
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
      });
  };

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/form" component={ Form } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/deshbord" component={ Deshbord } />
      </Switch>
      <main className="container mt-5 col-md-6 bg-secondary border border-5 rounded">
        <h1 className="mx-auto h1" style={{ width: 450 }}>
          Cadstre um Usuario
        </h1>
        <br />
        <form className="container col-md-10" onSubmit={handleSignup} method="POST">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Seu Nome
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className="mb-3 form-check"></div>
          <button disabled={isInvalid} type="submit" data-testid="sign-up" className="btn btn-primary btn-block">
            Cadastra
          </button>
        </form>
        <br />
      </main>
    </>
  );
}

export default App;
