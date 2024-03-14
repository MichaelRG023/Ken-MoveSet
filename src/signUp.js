
import React,{useState} from "react";
import "./App.css"



function SignUp(){
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        avatar: "",
    })
   
    
   
    function handleSubmit(e){
        e.preventDefault();
        

    }

    function handleChange(e){
      const key = e.target.id
      setFormData({
        ...formData,
        [key]: e.target.value
      })
    }
    console.log(formData)


    

    return(
        <form onSubmit={handleSubmit}>
            <h1>Create an Account</h1>
            <label htmlFor="username">Username</label>
            <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="enter your username..."
            />

            <label htmlFor="password">password</label>
            <input
            type="password"
            id= "password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password..."
            />



            <label htmlFor="avatars">Avatar Image</label>
            <input
            type="text"
            id="avatar"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            placeholder="enter your image here..."
            />
            <img
            className="avatar-image"
            src={formData.avatar ||
            "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png"
            }
            alt="Avatar preview"
            />


            <input type="submit" value="Sign Up"/>
         </form>
    
)
}




export default  SignUp;