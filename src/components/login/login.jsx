import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth,db } from "../../lib/firebase";
import {doc,setDoc,collection,query,where,getDocs} from "firebase/firestore";

const Login = () => {
    const [avatar,setavatar]=useState({
        file:null,
        url:""
    })
    const [loading,setLoading]=useState(false);
    const handleAvatar=e=>{
        if(e.target.files[0]){
           setavatar({
             file: e.target.files[0],
             url: URL.createObjectURL(e.target.files[0]),
           });
        }
    }
    const handleLogin=async(e)=>{
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);

        try{
          await signInWithEmailAndPassword(auth,email,password);
        }catch(err){
          console.log(err);
          toast.error(err.message)
        }
        finally{
          setLoading(false);
        }
    }
    const handleRegister=async(e)=>{
      e.preventDefault();

      const formData = new FormData(e.target);
      const { username, email, password } = Object.fromEntries(formData);
      if (!username || !email || !password)
        return toast.warn("Please enter inputs!");

      // VALIDATE UNIQUE USERNAME
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        return toast.warn("Select another username");
      }

      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", res.user.uid), {
          username,
          email,
          id: res.user.uid,
          blocked: [],
        });
        await setDoc(doc(db, "userchats", res.user.uid), {
          chats: [],
        });

        toast.success("account created! u can login now");
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    }
  return (
    <div className="login">
      <div className="item">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="EMAIL" name="email"></input>
          <input type="password" placeholder="PASSWORD" name="password"></input>
          <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create An Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} />
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            on
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="EMAIL" name="email"></input>
          <input type="password" placeholder="PASSWORD" name="password"></input>
          <button disabled={loading}>{loading ? "Loading" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  );
}

export default Login