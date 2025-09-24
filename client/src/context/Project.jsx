import React, { createContext, useState } from "react";

export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const add=(email,pass)=>{
    setEmail(email)
    setPassword(pass)
  }
  return (
    <>
      <ProjectContext.Provider value={{add,email,password}}>{children}</ProjectContext.Provider>
    </>
  );
};

export default ProjectContextProvider;
