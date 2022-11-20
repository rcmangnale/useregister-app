import React from "react";

export default function Views({ users }) {
  return users.map((user) => (
    <tr key={user.email}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.mobnumber}</td>
      <td>{user.date}</td>
      <td>{user.address}</td>
      <td>{user.email}</td>
    </tr>
  ));
}
