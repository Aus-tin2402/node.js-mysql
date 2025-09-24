import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { ProjectContext } from "../../context/Project";


const Login = () => {
  const {add}=useContext(ProjectContext);
  const [show, setShow] = useState(false);
  const navigate=useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const changeFun = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const loginBtnSubmit = async(event) => {
    event.preventDefault();
    try {
      let response=await axios.post(`http://localhost:2402/users/login/${login.email}/${login.password}`);
      add(response.data.data)
      navigate('/detail')
    } catch (error) {
     console.error(error) 
    }
  };
  return (
    <>
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
            Sign In{" "}
          </h1>
          <form
            onSubmit={(e) => loginBtnSubmit(e)}
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
                value={login.email}
                onChange={(e) => changeFun(e)}
                required
              />
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
                    value={login.password}
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
                    value={login.password}
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
            <div className="flex flex-row items-center gap-2 ">
              <p
                className="text-sm 
                font-mono
                font-medium
                "
              >
                New Account
              </p>
              <Link
                className="text-sm 
                text-purple-800
                font-mono
                font-medium
                underline underline-offset-1
                "
                to="/register"
              >
                register
              </Link>
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
                  Login
                </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default Login;
