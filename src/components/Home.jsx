import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const history = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    Number: "",
    date: "",
    Address: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(values);

  const getdata = (e) => {
    const { value, name } = e.target;

    setValues(() => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, Number, date, Address, password } = values;

    if (name === "") {
      toast.error(" Fullname field is requred!", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("It should be a valid email address!", {
        position: "top-center",
      });
    } else if (date === "") {
      toast.error("date of Birth field is requred", {
        position: "top-center",
      });
    } else if (Number === "") {
      toast.error("Mobile Number field is requred", {
        position: "top-center",
      });
    } else if (Address === "") {
      toast.error("Address field is requred", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 7) {
      toast.error("password length greater Seven", {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
      history("/login");
      localStorage.setItem("userdata", JSON.stringify([...data, values]));
    }
  };

  return (
    <>
      <div className="container mt-3">
        <section className="flex justify-center">
          <div className="p-3 mt-3" style={{ width: "50%" }}>
            <h3 className="text-center ">Registration Form</h3>
            <Form>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="Number"
                  onChange={getdata}
                  placeholder="Enter Mobile number"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="Address"
                  onChange={getdata}
                  placeholder="Enter Address"
                />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Control onChange={getdata} name="date" type="date" />
              </Form.Group>

              <Form.Group className="mb-3 " controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={addData}
                className="bg-sky-500"
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="flex justify-center gap-5 mt-3">
              Already Have an Account{" "}
              <span className="">
                <NavLink to="/login">SignIn</NavLink>
              </span>{" "}
            </p>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
