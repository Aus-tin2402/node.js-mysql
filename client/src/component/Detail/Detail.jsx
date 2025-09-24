import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getData() {
      let response = await axios.get(`http://localhost:2402/users/`);
      setProduct(response.data.data);
    }
    getData();
  }, []);

  return (
    <section className="w-full min-h-screen ">
      <div className="w-full h-[10vh] flex items-center justify-end px-6">
        <button
          className="bg-blue-500 px-6 py-1 rounded text-white font-semibold border "
          onClick={() => navigate("/upload")}
        >
          Upload
        </button>
      </div>
      <div className="px-6 py-4 flex justify-center overflow-x-auto">
        <table className="min-w-full border-collapse border ">
          <thead>
            <tr>
              {["First Name", "Last Name", "Email", "Password", "Update", "Delete"].map(
                (head, idx) => (
                  <th
                    key={idx}
                    className="border border-amber-600 px-4 py-2 text-lg italic font-semibold text-center"
                  >
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {product.map((data, index) => (
              <tr key={index} className="">
                <td className="border border-amber-600 px-4 py-2 text-center   ">{data.fname}</td>
                <td className="border border-amber-600 px-4 py-2 text-center">{data.lname}</td>
                <td className="border border-amber-600 px-4 py-2 text-center">{data.email}</td>
                <td className="border border-amber-600 px-4 py-2 text-center">{data.password}</td>
                <td className="border border-amber-600 px-4 py-2 text-center">
                  <button
                    className="bg-red-500 px-4 py-1 rounded text-white font-semibold cursor-pointer border hover:border-red-600 hover:bg-white hover:text-red-600 transition duration-300"
                    onClick={() => navigate("/update")}
                  >
                    Update
                  </button>
                </td>
                <td className="border border-amber-600 px-4 py-1 text-center">
                  <button
                    className="bg-green-500 px-4 py-1 rounded cursor-pointer text-white font-semibold border hover:border-green-600 hover:bg-white hover:text-green-600 transition duration-300"
                    onClick={() => navigate("/delete")}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Detail;
