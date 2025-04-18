import { arrayUnion, collection, getDocs, query, serverTimestamp } from "firebase/firestore"
import "./addUser.css"
import { db } from "../../../../lib/firebase"
import { getDoc,doc,setDoc,where,updateDoc} from "firebase/firestore"
import { useState } from "react"
import { useUserStore } from "../../../../lib/userStore"
const AddUser = () => {
  const {currentUser}=useUserStore();
  const [user,setUser]=useState(null);
  const handleSearch=async(e)=>{
    e.preventDefault()
    const formData=new FormData(e.target)
    const username=formData.get("username")
  
    try{
      const useRef=collection(db,"users");
      const q=query(useRef,where("username","==",username));

      const querySnapShot=await getDocs(q);
      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      } else {
        setUser(null); // If no user is found, reset the user state
      }
    }catch(err){
      console.log(err)
    }
  }
  const handleAdd = async (e) => {
    if (!user || !currentUser) {
      console.log("User or currentUser is not defined");
      return; // Early exit if either user or currentUser is not set
    }
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      const newChatRef = doc(chatRef);
      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });
      if (user.id) {
        await updateDoc(doc(userChatsRef, user.id), {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: "",
            receiverId: currentUser.id,
            updatedAt: Date.now(),
          }),
        });
      } else {
        console.log("User ID is not defined");
      }
      if (currentUser.id) {
        await updateDoc(doc(userChatsRef, currentUser.id), {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: "",
            receiverId: user.id,
            updatedAt: Date.now(),
          }),
        });
      } else {
        console.log("CurrentUser ID is not defined");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='addUser'>
        <form onSubmit={handleSearch}>
           <input type="text" placeholder="Username" name="username"/>
           <button>Search</button>
        </form>
        {user && <div className="user">
            <div className="detail">
                <img src="./avatar.png" alt=""/>
                <span>{user.username}</span>
            </div>
            <button onClick={handleAdd}>Add User</button>
        </div>}
    </div>
  )
}

export default AddUser