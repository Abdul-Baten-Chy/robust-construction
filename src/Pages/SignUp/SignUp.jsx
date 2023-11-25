import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();
  const { createAccount, updateUserProfile } = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
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
      .catch((error) => {console.log(error)});
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
              <span className="label-text">photo</span>
            </label>
            <input
              type="text"
              placeholder="URL"
              {...register("photoURL")}
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              {...register("password",{pattern:/^(?=.*[A-Z])(?=.*[!@#$%^&*()])(.{6,})$/}, { required: true })}
              className="input input-bordered"
            />
            {errors.password && <span>insert a valid password</span>}
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
