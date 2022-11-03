import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../redux/action/action";
const auth = getAuth();

export const Login = ()=>{
  const dispatch = useDispatch();
  const state = useSelector((state)=>state);
  const [email, setEmail] = useState(""); 

  const [password, setPassword] = useState(""); 
  console.log(state);
  const  handlelogin = (e)=>{
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  const  handlepass = (e)=>{
    console.log(e.target.value);
    setPassword(e.target.value);
  }
  const handlesubmit = (e)=>{
    console.log(email);
    console.log(password);
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    if(user){
      console.log("User Allowed");
      dispatch(userLogin(user));
      console.log(state);
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  
  console.log(state);
    setEmail("");
    setPassword("");
    e.preventDefault();
  }
    return(
        <>
        <div className="row vh-100 mt-5">
          <div className="col-8 offset-2 " style={{justifyContent : "center"}}>
            <h2 className="text-center name2">LOGIN</h2>
            <Form onSubmit={handlesubmit} className= "w-50 m-auto">
        <FormGroup >
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" value={email} onChange={handlelogin} />
        </FormGroup>
        <FormGroup >
          <Label for="Password" >Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter Password" value={password} onChange={handlepass} />
        </FormGroup>
        <Button type="submit" className="" style={{backgroundColor : "#44FFFF" , color : "black", fontWeight : "bold"}}>Submit</Button>
        </Form>
          </div>
          
        </div>
            
        </>
    );
}