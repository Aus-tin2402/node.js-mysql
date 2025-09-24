import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
  });
  const changeFun = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const registeSubmitBtn = async (event) => {
    event.preventDefault();
    try {
      let response = await axios.post(
        `http://localhost:2402/users/register`,
        register
      );
      console.log(response.data);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="w-[100%] h-[100vh] flex items-center justify-center ">
      <section className="w-[600px] rounded border px-4 py-6 shadow-xl/30  shadow-cyan-500/50">
        <h1
          className="text-center 
            text-2xl
            font-serif
            font-bold
            text-orange-600
            "
        >
          Sign Up{" "}
        </h1>
        <form
          onSubmit={(e) => registeSubmitBtn(e)}
          className="w-[100%] h-[100%] flex flex-col gap-4"
        >
          <div className="flex items-start flex-col gap-2">
            <label className="w-[100%] text-xl  " htmlFor="email">
              Enter Mail Id :{" "}
            </label>
            <input
              className="rounded w-[90%] border px-2 py-0.5 outline-none"
              type="email"
              name="email"
              id="email"
              value={register.email}
              onChange={(e) => changeFun(e)}
              required
            />
          </div>
          <div
            className="
          flex 
          "
          >
            <div className=" w-[100%] flex items-start flex-col gap-2">
              <label className="w-[100%] text-xl  " htmlFor="fname">
                Enter First Name :{" "}
              </label>
              <input
                className="rounded w-[90%] border px-2 py-0.5 outline-none"
                type="text"
                name="fname"
                id="fname"
                value={register.fname}
                onChange={(e) => changeFun(e)}
                required
              />
            </div>
            <div className=" w-[100%] flex items-start flex-col gap-2">
              <label className="w-[100%] text-xl  " htmlFor="lname">
                Enter Last Name :{" "}
              </label>
              <input
                className="rounded w-[90%] border px-2 py-0.5 outline-none"
                type="text"
                name="lname"
                id="lname"
                value={register.lname}
                onChange={(e) => changeFun(e)}
                required
              />
            </div>
          </div>
          <div className="input-feild-group">
            <label className="w-[100%] text-xl  " htmlFor="password">
              Enter Password :{" "}
            </label>
            {!show ? (
              <div className="flex gap-2">
                <input
                  className=" rounded w-[100%] border px-2 py-0.5 outline-none"
                  type="password"
                  name="password"
                  id="password"
                  value={register.password}
                  onChange={(e) => changeFun(e)}
                  required
                />
                <button
                  className="border cursor-pointer  px-2 py-0.5 rounded-xl bg-red-600 text-white hover:border-red-600 hover:bg-white hover:text-red-600"
                  onClick={(e) => setShow(true)}
                >
                  show
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  className="w-[90%] border px-2 py-0.5 outline-none"
                  type="text"
                  name="password"
                  id="password"
                  value={register.password}
                  onChange={(e) => changeFun(e)}
                  required
                />
                <button
                  className="border cursor-pointer  px-2 py-0.5 rounded-xl bg-red-600 text-black hover:border-red-600 hover:bg-white hover:text-red-600 "
                  onClick={(e) => setShow(false)}
                >
                  show
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              className="bg-blue-500 px-6 py-1
              rounded
              text-white
              cursor-pointer
              border
              hover:border-blue-600 
              hover:bg-white 
              hover:text-blue-600
              "
            >
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Register;
