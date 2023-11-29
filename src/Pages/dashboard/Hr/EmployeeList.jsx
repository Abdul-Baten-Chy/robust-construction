import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useUsers from "../../../Hooks/useUsers";
import { FaRegRectangleXmark, FaRegSquareCheck } from "react-icons/fa6";
import Swal from "sweetalert2";
const EmployeeList = () => {

    const axiosSecure = useAxiosSecure()
    const [users, refetch] = useUsers()
    const employee = users?.filter(user=>user.role=='Employee')
    const handleVerify=(_id)=>{
        
       axiosSecure.patch(`/users/verify/${_id}`)
       .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'user status changed',
                showConfirmButton: false,
                timer: 1500
              });
        }
        
    })
       
    }

    return (
        <div className="overflow-x-auto">
          <h2 className="text-center bg-green-400 px-10 py-2 text-white">Employee Number: <span className="font-bold">{employee?.length}</span></h2>
  <table className="table">
    
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Bank Account</th>
        <th>Salary</th>
        <th>Status</th>
        <th>Details</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        employee?.map((singleEmployee, index)=><tr key={singleEmployee._id}>
        <th> {index + 1}</th>
        <td> {singleEmployee.name}</td>
        <td>{singleEmployee.email} </td>
        <td>{singleEmployee.account} </td>
        <th>{singleEmployee.salary} </th>
        <th className="text-center text-xl" onClick={()=>{handleVerify(singleEmployee._id)}}>{
           singleEmployee.isVerified? <FaRegSquareCheck /> :<FaRegRectangleXmark /> 
        }</th>
        <th>
            <button className="btn btn-ghost btn-xs">details</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">Pay</button>
        </th>
      </tr>
        )
      }
    </tbody>
   
    
    
  </table>
</div>
    );
};

export default EmployeeList;