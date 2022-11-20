import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Views from "./Views";

// // getting the values of local storage
// const getDatafromLS = () => {
//   const data = localStorage.getItem("users");
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [data];
//   }
// };

const Details = () => {
  // const [users, setUsers] = useState(getDatafromLS());
  const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  const Welcome = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);
    }
  };

  // useEffect(() => {
  //   const users = localStorage.getItem('users');
  //   if (users) {
  //    setUsers(users);
  //   }
  // }, []);

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
        "ErrorPage"
      ) : (
        <>
          <div className="px-4 py-2 text-blue-700 border-t border-b border-blue-500 ">
            <div className="flex justify-end px-10 ">
              <h1 className="px-4 ">{logindata[0].name}</h1>
              <Button className="px-2 w-28" onClick={userlogout}>
                LogOut
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center py-10 ">
            <h1>Details Page</h1>
            <h1>Hello, welcome to our website</h1>
            <h1 className="pb-16">{logindata[0].name}</h1>
            <table className="mx-16 table-fixed" style={{ width: "80%" }}>
              <thead>
                <tr className="grid border lg:grid-cols-6 lg:gap-24">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Date of Birth</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="grid border lg:grid-cols-6 lg:gap-24">
                  <td>{logindata[0].name}</td>
                  <td>{logindata[0].email}</td>
                  <td>{logindata[0].Number}</td>
                  <td>{logindata[0].date}</td>
                  <td>{logindata[0].Address}</td>
                  <td className="py-2">
                    <button className="w-24 bg-blue-500 rounded-lg">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
              {/* {users.map((user) => (
                <tr
                  key={user.email}
                  className="grid border lg:grid-cols-6 lg:gap-24"
                >
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.Number}</td>
                  <td>{user.date}</td>
                  <td>{user.Address}</td>
                  <td className="py-2">
                    <button className="w-24 bg-blue-500 rounded-lg">
                      Edit
                    </button>
                  </td>
                </tr>
              ))} */}
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
