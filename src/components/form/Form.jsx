import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const dados = {
  title: "",
  email: "",
  password: "",
  password1: "",
};

const Form = () => {
  const [receb, setReceb] = useState(dados);
  const [local, setLOcal] = useState("");

  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(`${receb.title}`));
    localStorage.setItem("email", JSON.stringify(`${receb.email}`));
    localStorage.setItem("password", JSON.stringify(`${receb.password}`));
  }, [receb]);

  const onChange = (ev) => {
    const { name, value } = ev.target;

    setReceb({ ...receb, [name]: value });
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    history.push("/login");
  };

  console.log(receb);

  return (
    <>
      <main className="container mt-5 col-md-6 bg-info border border-5 rounded">
        <h1 className="mx-auto h1" style={{ width: 450 }}>
          Cadstre um Usuario
        </h1>
        <br />
        <form className="container col-md-10" onSubmit={onSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Seu Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              value={receb.title}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={receb.email}
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
              value={receb.password}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Confirma Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="Password1"
              name="password1"
              value={receb.password1}
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check"></div>
          <button type="submit" className="btn btn-primary btn-block">
            Cadastra
          </button>
        </form>
        <br />
      </main>
    </>
  );
};

export default Form;
