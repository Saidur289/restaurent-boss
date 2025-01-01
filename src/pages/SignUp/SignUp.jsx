import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/others/authentication2.png";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
  const { handleSignUp, updateUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const updatedData = {
      displayName: data?.name,
      photoURL: data?.photo,
    };
    handleSignUp(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateUser(updatedData).then(() => {
          toast.success("sign up successfully");

          reset()
          navigate('/')      ;
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-3xl py-3 text-center font-bold">
              Sign Up now!
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                {...register("name", { required: true })}
                className="input input-bordered"
                required
              />
              {errors.name?.type && <span>This Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="photo"
                {...register("photo", { required: true })}
                className="input input-bordered"
                required
              />
              {errors.photo?.type && <span>This PhotoUrl is required</span>}
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
                required
              />
              {errors.email?.type && <span>This email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                })}
                className="input input-bordered"
                required
              />

              {errors.password?.type && (
                <span>This password must attest 6 or more is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-xs text-center p-3">
            Already Have An Account?{" "}
            <Link to="/login" className="text-red-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
