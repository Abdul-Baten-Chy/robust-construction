import { FaRegRectangleXmark, FaRegSquareCheck } from "react-icons/fa6";
import useUsers from "../../Hooks/useUsers";


const AllEmplyeeList = () => {

    const [users] = useUsers()
    const allEmployee = users?.filter(user => user?.role !== 'Admin' && user.isVerified == true)
    const hrOnly = users?.filter(user => user.role ==='Hr Manager')
    const onlyVerifiedEmploye = allEmployee?.concat(hrOnly)
    console.log(onlyVerifiedEmploye);
    
    
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
        onlyVerifiedEmploye?.map((singleEmployee, index)=><tr key={singleEmployee._id}>
        <th> {index + 1}</th>
        <td> {singleEmployee.name}</td>
        <td>{singleEmployee.designation} </td>
        <th className="text-center text-xl">
            {
           singleEmployee.role==='Hr Manager'? <FaRegSquareCheck />:<FaRegRectangleXmark /> 
        }
        </th>
        <th>
            <button className="btn btn-ghost btn-xs">Fire</button>
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