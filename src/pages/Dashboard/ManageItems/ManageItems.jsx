import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../Shared/Loading/Loading";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu, isLoading, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()
    if(isLoading) return <Loading></Loading>
    const handleDeleteMenu = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${id}`)
                if(res.data.deletedCount>0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
             

            }
          });
    }
    return (
        <div>
            <SectionTitle heading={'manage all items'} subHeading={'Hurry up'}></SectionTitle>
             <div className="overflow-x-auto">
                    <table className="table w-full">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>
                           #
                          </th>
                          <th>Image</th>
                          <th>Item Name</th>
                          <th>Price</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) =>  <tr key={index}>
                            <th>
                              {index + 1}
                            </th>
                            <td>
                              <div className="flex items-center gap-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle h-12 w-12">
                                    <img
                                      src={item.image}
                                      alt="Avatar Tailwind CSS Component"
                                    />
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                             {item.name}
                             
                            </td>
                            <td>${item.price}</td>
                            <th>
                              <button onClick={() => handleDeleteMenu(item._id)} className="btn btn-ghost btn-xs"><FaTrash className="text-red-500"></FaTrash></button>
                           <Link to = {`/dashboard/updateItems/${item._id}`}> <button  className="btn btn-ghost btn-xs"><FaEdit className="text-purple-500"></FaEdit></button></Link>
                            </th>
                          </tr>)
                        }
                       
                       
                      </tbody>
                     
                    
            
                    </table>
                  </div>

        </div>
    );
};

export default ManageItems;