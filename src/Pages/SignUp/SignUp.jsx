import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPub from "../../Hooks/useAxiosPub";


const image_api ='7751b04e958c865b86a251faba8c77eb'
const image_key =`https://api.imgbb.com/1/upload?key=${image_api}`

const SignUp = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPub()
  const { createAccount, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const image = { image: data.image[0] }
        const result = await axiosPublic.post(image_key, image,{
          headers:{
            'content-type':'multipart/form-data'
          }
        })

        if (result.data.success) {
          const users = {
              name: data.name,
              email: data.email,
              salary: parseFloat(data.salary),
              designation: data.designation,
              account: data.accountNumber,
              role: data.role,
              image: result.data.data.display_url,
          }
        const userResult = await axiosPublic.post('/users', users)
        console.log(userResult);

        }

    createAccount(data.email, data.password)
      .then((res) => {
        const user = res.user;
        
        console.log(data, user);
        updateUserProfile(data.name, data.photoURL).then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logged In successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        });
        
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen ">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              {...register("name")}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
              className="input input-bordered"
            />
            {errors.email && <span>email is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Bank A/c</span>
            </label>
            <input
              type="text"
              placeholder="account"
              {...register("accountNumber", { required: true })}
              className="input input-bordered"
            />
            {errors.accountNumber && <span>insert a valid account number</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              {...register(
                "password",
                { pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()])(.{6,})$/ },
                { required: true }
              )}
              className="input input-bordered"
            />
            {errors.password && <span>insert a valid password</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Designation</span>
            </label>
            <input
              type="text"
              placeholder="designation"
              {...register("designation", { required: true })}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary</span>
            </label>
            <input
              type="number"
              placeholder="salary"
              {...register("salary", { required: true })}
              className="input input-bordered"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                select your role
              </span>            
            </label>
            <select defaultValue={'default'}
             {...register("role", { required: true })}
            className="select select-bordered">
              <option value={'default'}>
                Pick one
              </option>
              <option>Employee</option>
              <option>Hr Manager</option>
              <option>Admin</option>   
            </select>            
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload image</span>
            </label>
            <input
              type="file"
              placeholder="upload image"
              {...register("image", { required: true })}
              className="file-input file-input-bordered file-input-accent w-full max-w-xs" 
            />
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
          <p>
            Have account? <Link to="/signIn">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
