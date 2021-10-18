import React, { useEffect, useState } from "react";

const Deshbord = () => {
  const [users, setUser] = useState("");

  useEffect(() => {
    let req = localStorage.getItem("name");
    let res = JSON.parse(req);
    setUser(res);
  }, []);

  return (
    <>
      <div id="list-example" className="list-group">
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-1"
        >
          Olá {users}
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-2"
        >
          Minha conta
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-3"
        >
          Produtos
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-4"
        >
          Ajuda
        </a>
      </div>
      <div
        data-spy="scroll"
        data-target="#list-example"
        data-offset="0"
        className="scrollspy-example"
      ></div>
    </>
  );
};

export default Deshbord;
