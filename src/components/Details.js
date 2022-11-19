import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Details = () => {
  const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Welcome = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 1000);
      }
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Welcome();
  }, []);

  return (
    <>
      {logindata.length === 0 ? (
        "errror"
      ) : (
        <>
          <div className="flex flex-col items-center ">
            <h1>Details Page</h1>
            <h1>{logindata[0].name}</h1>
            <Button className="flex justify-center w-28" onClick={userlogout}>
              LogOut
            </Button>
          </div>
          {logindata[0].date === todayDate ? (
            <Modal show={true} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{logindata[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>Hello, welcome to our website !!!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Details;
