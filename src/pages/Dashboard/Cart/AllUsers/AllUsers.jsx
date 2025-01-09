import React from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAdmin from "../../../../hooks/useAdmin";

const AllUsers = () => {
    const [isAdmin, isAdminLoading] = useAdmin()
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleAdminRole = (id) => {
    axiosSecure.patch(`/users/admin/${id}`)
    .then((res) => {
        if(res.data.modifiedCount>0){
            Swal.fire('status updated successfully')
        }
    })
  }
  console.log(users);
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="font-bold text-3xl">All Users</h2>
        <h2 className="font-bold text-3xl">Total Users: </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={index} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                {
                    user?.role === 'admin'? 'Admin':  <button
                    onClick={() => handleAdminRole(user._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaUsers className= "text-orange-500 text-2xl "></FaUsers>
                  </button>
                 }
                </td>
                <td>

                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrash className="text-red-500 text-2xl"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
