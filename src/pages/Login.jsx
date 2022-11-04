import { AiFillLock } from "react-icons/ai";
import { FaStarOfLife } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"


const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext)
  const navitage = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user })
        navitage("/admin")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="w-full h-screen flex items-center">
      <div className="max-w-[700px] p-8 w-full mx-auto">
        <div className="shadow-xl rounded-lg border border-gray-100">
          <div className="flex gap-1 items-center border-b-[1px] p-4">
            <AiFillLock className="text-xl" />
            <h1 className="font-bold text-xl">Login</h1>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col p-4 gap-8" action="">
            <div>
              <label className="">Login</label>
              <div className="flex mt-2 p-3 items-center border rounded-lg">
                <BsPersonFill className="mr-1" />
                <input
                  className="outline-none"
                  type="email"
                  placeholder="user@hotmail.com"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <p className="text-[13px] mt-1 text-gray-500">
                Please enter your login
              </p>
            </div>

            <div>
              <label className="">Password</label>
              <div className="flex mt-2 p-3 items-center border rounded-lg">
                <FaStarOfLife className="mr-1" />
                <input
                  className="outline-none"
                  type="password"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <p className="text-[13px] mt-1 text-gray-500">
                Please enter your login
              </p>
            </div>

            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <span>Remember</span>
            </div>

            <div className="flex gap-3">
              <button className="w-fit px-7 py-2 rounded-md text-white bg-blue-600">Login</button>
              <button className="w-fit px-7 py-2 rounded-md border">Back</button>
            </div>
            {error && <span className="text-red-500">Wrong email or password!</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
