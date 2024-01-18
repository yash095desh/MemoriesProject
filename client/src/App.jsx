import React from "react";
import Appbar from "./Components/Appbar";
import Post from "./Components/Post";
import Form from "./Components/Form";

function App() {
  return (
   <div className=" w-full flex justify-center items-center">
     <div className=" flex flex-col items-center justify-center w-[90%]">
      <Appbar />
      <div className="main flex w-[90%]">
        {/* POST */}
        <div className="Posts">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        {/* EditPost */}
        <Form/>
      </div>
    </div>
   </div>
  );
}

export default App;
