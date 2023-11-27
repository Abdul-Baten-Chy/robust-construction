// import useHr from "../../Hooks/useHr";
import useUsers from "../../Hooks/useUsers";

const EmployeeList = () => {
// const [isHr] = useHr()

    const users = useUsers()
    const employee = users?.filter(user=>user.role=='Employee')
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
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
        <th>{singleEmployee.isVerified} </th>
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