import { Sidebar } from "../Components/Sidebar";
import { Center } from "../Components/Center";
import { Login } from "../Components/login";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export const Body = ()=>{
    const state = useSelector((state)=>state.user);
    console.log("In Body");
    console.log(state);
    var element = (state != null ? (<div className="row">
    <div className="col-md-3">
        <Sidebar />
    </div>
    <div className="col-md-9">
    
    <Center />
    </div>
</div>) :(<div>
    <Login />
</div> ) )
    useEffect(()=>{
        console.log("In the use Effect");
        element = (state != null ? (<div className="row bg-success">
                <div className="col-md-3 bg-primary">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                
                <Center />
                </div>
            </div>) :(<div>
                <Login />
            </div> ) )
            
    }
,[state]
    )

        return(
        <>
        {element}
            
            
        </>

    );
}