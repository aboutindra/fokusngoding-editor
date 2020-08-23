import dynamic from "next/dynamic";
import Sidebar from "./sidebar";
import Style from "../styles/Home.module.css"
import React from "react";
const CodeEditor = dynamic(import('../components/editor'), {ssr: false})

const Layout = () => {

  return(
    <div className={Style.container}>
      <CodeEditor />
      <Sidebar/>
    </div>
  );

}

export default Layout