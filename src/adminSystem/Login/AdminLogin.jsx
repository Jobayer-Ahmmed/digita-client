import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
import {  useNavigate } from "react-router-dom";
import { TbEye, TbEyeClosed } from "react-icons/tb";

import Swal from "sweetalert2";
import { Context } from "../../context/AuthProvider";

const AdminLogin = () => {
  const [passwordVisiblity, setPasswordVisiblity] = useState("password");
  const [passwordTrigger, setPasswordTrigger] = useState(false);
  const navigate = useNavigate()
  const {login} = useContext(Context)

  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const {email, password} = data

    login(email, password)
    .then(()=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Welcome",
        showConfirmButton: false,
        timer: 1500
      })

      navigate("/admin/dashboard")
    })
  };

  const handlePassword = () => {
    setPasswordTrigger(!passwordTrigger);
    if (passwordTrigger) {
      setPasswordVisiblity("password");
    } else {
      setPasswordVisiblity("text");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className=" w-full flex justify-center "
      data-aos="zoom-in"
    >
      <div className="p-10 border rounded-lg shadow-xl">
        <h2 className="text-2xl font-medium pb-3 border-b mb-5">Login Now</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            type="email"
            className="w-64 md:w-80 h-10 px-2 rounded"
          />
          <br />
          {errors.email && (
            <span className="text-red-700">Email is required</span>
          )}{" "}
          <br />
          <input
            {...register("password", { required: true })}
            placeholder="Password"
            type={passwordVisiblity}
            className="w-64 md:w-80 h-10 px-2 rounded "
          />
          <TbEye
            onClick={handlePassword}
            className={` inline -ml-7 text-2xl ${
              passwordTrigger ? "hidden" : ""
            }`}
          />
          <TbEyeClosed
            onClick={handlePassword}
            className={`inline -ml-7 text-2xl ${
              passwordTrigger ? "" : "hidden"
            }`}
          />
          <br />
          {errors.password && (
            <span className="text-red-700">Password is required</span>
          )}
          <br />
          <input
            type="submit"
            value="Login"
            className="mt-5 btn bg-cyan-800 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
