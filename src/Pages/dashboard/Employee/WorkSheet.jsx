// import DatePicker from "../../../Components/DatePicker/DatePicker";
// import { useState } from "react";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const WorkSheet = () => {
  const axiosSecure = useAxiosSecure();
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const tasks = form.task.value;
    const hour = form.hour.value;
    const date = form.date.value;
    const workSheetInfo = {
      tasks,
      hour,
      date,
    };

    axiosSecure.post("/worksheet", workSheetInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "work info added  successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()
      }
    });
  };

  const { data, refetch } = useQuery({
    queryKey: ["worksheet"],
    queryFn: async () => {
      const res = await axiosSecure.get("/worksheet");
      return res.data;
    },
  });

  
  return (
    <div>
      <form
        onSubmit={handleForm}
        className="flex flex-col md:flex-row gap-4 bg-cyan-400 px-10 py-4"
      >
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select Task </span>
          </div>
          <select
            name="task"
            defaultValue={"disabled"}
            className="select select-bordered"
          >
            <option value={"disabled"}>Pick one</option>
            <option>Sales</option>
            <option>Support</option>
            <option>Content</option>
            <option>Paper Work</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Hour Worked </span>
          </div>
          <input
            type="number"
            name="hour"
            placeholder="Hours worked"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Pick Date </span>
          </div>
          <input
            type="date"
            name="date"
            placeholder="Hours worked"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </label>
        <div className="flex justify-center items-center mt-8">
          <button className="btn btn-primary bg-white border-none text-black " type="submit">
            Add
          </button>
        </div>
      </form>
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
    </div>
  );
};

export default WorkSheet;
