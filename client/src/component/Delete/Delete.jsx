import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Delete = () => {
  const [email, setEmail] = useState(``);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const deletebtnSubmit = async (e) => {
    try {
      let response=await axios.delete(`http://localhost:2402/users/delete/${email}`)
      console.log(response.data);
      navigate('/detail')
      setShow(false)
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <>
      <section className="w-[100%] h-[100vh] flex items-center justify-center ">
        <section className="w-[600px] rounded border px-4 py-6 shadow-xl/30  shadow-cyan-500/50">
          {!show ? (
            <>
              <h1 
                className="text-2xl
                font-bold
                antialiased
                italic
                font-mono
                "
              >
                Are you sure want to delete this product <span>?</span>{" "}
              </h1>

              <div className="
                flex
                items-center 
                justify-center 
                gap-6              
              ">
                <button className="bg-red-500 px-6 py-1
              rounded
              text-white
              cursor-pointer
              border
              hover:border-red-600 
              hover:bg-white 
              hover:text-red-600
              "  onClick={() => setShow(!show)}>Yes</button>
                <button className="bg-green-500 px-6 py-1
              rounded
              text-white
              cursor-pointer
              border
              hover:border-green-600 
              hover:bg-white 
              hover:text-green-600
              " onClick={() => navigate("/detail")}>No</button>
              </div>
            </>
          ) : (
            <form
              onSubmit={(e) => deletebtnSubmit(e)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <button
                  className="bg-red-500 px-6 py-1
              rounded
              text-white
              cursor-pointer
              border
              hover:border-red-600 
              hover:bg-white 
              hover:text-red-600
              "
                >
                  Delete
                </button>
              </div>
            </form>
          )}
        </section>
      </section>
    </>
  );
};

export default Delete;
