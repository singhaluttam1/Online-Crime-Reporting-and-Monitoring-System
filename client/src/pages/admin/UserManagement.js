import React, { useEffect, useState } from "react";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleRoleChange = async (id, newRole) => {
    await axios.put(`/api/admin/users/${id}`, { role: newRole });
    const updated = users.map((u) => (u._id === id ? { ...u, role: newRole } : u));
    setUsers(updated);
  };

  return (
    <div className="p-4">
      <h2>User Management</h2>
      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Change Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.email}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
              <td>
                <select value={u.role} onChange={(e) => handleRoleChange(u._id, e.target.value)}>
                  <option value="public">Public</option>
                  <option value="police">Police</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;