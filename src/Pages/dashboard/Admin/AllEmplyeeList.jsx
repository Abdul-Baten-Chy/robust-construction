import { FaRegRectangleXmark, FaRegSquareCheck } from "react-icons/fa6";
import useUsers from "../../../Hooks/useUsers";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AllEmplyeeList = () => {
    const axiosSecure= useAxiosSecure()
    const [users, refetch] = useUsers()
    const allEmployee = users?.filter(user => user?.role !== 'Admin' && user.isVerified == true)
    const hrOnly = users?.filter(user => user.role ==='Hr Manager')
    const onlyVerifiedEmploye = allEmployee?.concat(hrOnly)
    
    const handleMakeHr=(_id)=>{
        axiosSecure.patch(`/users/hr/${_id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'employee Promoted to HR!',
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            
        })
    }
    
    const handleFired=(_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Fire him!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/fire/${_id}`)
                .then(res =>{
                    console.log(res.data)
                    if(res.data.modifiedCount > 0){
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: 'employee has been fired',
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                    
                })
            }
          });
        
    }
    
    return (
        <div className="overflow-x-auto">
          <h2 className="text-center bg-green-400 px-10 py-2 text-white">Employee Number: <span className="font-bold">{onlyVerifiedEmploye?.length}</span></h2>
  <table className="table">
    
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>Designation</th>
        <th>Make HR</th>
        <th>Fire</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        onlyVerifiedEmploye?.map((singleEmployee, index)=><tr key={`${singleEmployee._id}-${index}`}>
        <th> {index + 1}</th>
        <td> {singleEmployee.name}</td>
        <td>{singleEmployee.designation} </td>
        <th className="text-center text-xl" onClick={()=>handleMakeHr(singleEmployee._id)}>
            {
           singleEmployee.role==='Hr Manager'? <FaRegSquareCheck />:<FaRegRectangleXmark /> 
        }
        </th>
        <th>
            <button className="btn btn-primary btn-xs" onClick={()=>handleFired(singleEmployee._id)}>
                {singleEmployee.isFired? 'Fired': 'fire'}
            </button>
        </th>
      </tr>
        )
      }
    </tbody>
   
    
    
  </table>
</div>
    );
};

export default AllEmplyeeList;