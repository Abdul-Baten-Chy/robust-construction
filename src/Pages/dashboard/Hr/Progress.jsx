import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Progress = () => {
    const axiosSecure = useAxiosSecure()
    const { data} = useQuery({
        queryKey: ["worksheet"],
        queryFn: async () => {
          const res = await axiosSecure.get("/worksheet");
          return res.data;
        },
      });
    return (
        <div className="overflow-x-auto">
        <h2 className="text-center bg-green-400 px-10 py-2 text-white my-5">
          Employee Number: <span className="font-bold">{data?.length}</span>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th className=" px-5 text-center">#</th>
              <th className="bg-green-400 px-5 text-center">Task</th>
              <th className=" px-5 text-center">Work Hour</th>
              <th className="bg-green-400 px-5 text-center">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.map((singleData, index) => (
              <tr key={singleData._id}>
                <th className=" px-5 text-center"> {index + 1}</th>
                <td className="bg-cyan-400 px-5 text-center"> {singleData.tasks}</td>
                <td className=" px-5 text-center">{singleData.hour} </td>
                <td className="bg-cyan-400 px-5 text-center">{singleData.date} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Progress;