import React, { useState, useEffect } from "react";
import Component1 from "../Component1";
import Component2 from "../Component2";
import Component3 from "../Component3";

export default function Home() {
  const [Data, setData] = useState("");
  const [newData, setnewData] = useState("");
  const addData = () => {
    setData("New Data");
  };
  const updateData = () => {
    setData(newData);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <a style={{ color: "white" }} className="navbar-brand">
          Precily
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav"></ul>
        </div>
      </nav>
      <div className="row d-flex justify-content-center p-3 mt-5">
        <button className="btn btn-primary mx-2 " onClick={addData}>
          Add
        </button>
        <button
          className=" btn btn-primary mx-2"
          data-toggle="modal"
          data-target="#updateModal"
          disabled={Data.length == 0 ? true : false}
        >
          Update
        </button>
      </div>

      <div className="row d-flex justify-content-center p-3">
        <div className="col-md-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Data</th>
              </tr>
            </thead>
            <tbody>
              <td>
                <p>{Data}</p>
              </td>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row d-flex flex-row justify-content-center align-items-center m-3">
        <Component1 />
        <Component2 />
      </div>
      <div className="row d-flex flex-row justify-content-center align-items-center m-3">
        <Component3 />
      </div>

      <div
        className="modal fade"
        id="updateModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="importModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h6>Update</h6>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" style={{ fontSize: "25px" }}>
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    type="text "
                    placeholder="Enter new Data"
                    onChange={(e) => setnewData(e.target.value)}
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="m-3">
                  <button className="btn btn-primary" onClick={updateData}>
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
