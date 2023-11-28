import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useUsers from "../../Hooks/useUsers";


const SignIn = () => {

    const navigate = useNavigate();
    const location =useLocation()
    const { signInUser} = useAuth();
    const [users]= useUsers()
    const validUsers=users?.filter(user => user.isFired == true)
 
    const { register, handleSubmit, formState: { errors }} = useForm();
    
    const onSubmit = (data) => {
      const firerdUser = validUsers?.find(item => item.email === data.email)

      if(!firerdUser){
        signInUser(data.email, data.password)
        .then((res) => {
          const user = res.user;
          console.log(data, user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logged In successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location?.state? location.state: '/');
        })
        .catch((error) =>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 2500,
              });
        });
      }else{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user is fired and not allowed to sign in",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      
    };

    return (
        <div className="hero min-h-screen ">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
              {...register("password", { required: true })}
              className="input input-bordered"
            />
            {errors.password && <span>password is required</span>}
          </div>

          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
          <p>
           Do not have account? <Link to="/signUp">Register</Link>
          </p>
        </form>
      </div>
    </div>
    );
};

export default SignIn;