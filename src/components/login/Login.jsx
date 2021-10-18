import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const dados = {
  email: "",
  password: "",
};

const Login = () => {
  const [login, setLogin] = useState(dados);
  const [users, setUser] = useState("");
  const [users0, setUser0] = useState("");
  const [users1, setUser1] = useState("");

  console.clear();
  console.log(login);

  useEffect(() => {
    let req = localStorage.getItem("name");
    let res = JSON.parse(req);
    setUser(res);

    let req0 = localStorage.getItem("email");
    let res0 = JSON.parse(req0);
    setUser0(res0);

    let req1 = localStorage.getItem("password");
    let res1 = JSON.parse(req1);
    setUser1(res1);
  }, []);

  console.log(users, users0, users1);

  const history = useHistory();

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setLogin({ ...login, [name]: value });
  };

  const logar = (ev) => {
    ev.preventDefault();

    let usr = login.email;
    let pass = login.password;

    if (users === usr && users1 === pass) {
      alert("Login efetuado com sucesso");
      history.push("/deshbord");
    } else {
      alert(`Houve um erro`);
    }
  };

  return (
    <>
      <main className="container mt-5 col-md-6 bg-info border border-5 rounded">
        <h1 className="mx-auto h1" style={{ width: 450 }}>
          Login
        </h1>
        <br />
        <form className="container col-md-10" onSubmit={logar}>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              E-mail ou Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="Password"
              name="password"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check"></div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
        <br />
      </main>
    </>
  );
};

export default Login;
