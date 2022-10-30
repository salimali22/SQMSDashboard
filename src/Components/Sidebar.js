import { Floor } from "./Floor";

export const Sidebar = ()=>{
    return(
        <>
            <div className="row header min-vh-100 side ">
                <div className="col-12 text-white mt-4 mb-0 pb-0 ">
                    <i className="fa fa-user " style={{fontSize:"50px"}}></i>
                    <span className="fs-2 fw-bold name ">&nbsp; Nabeel Ahmed</span>
                </div>
                
                    <div className="col">
                    <Floor name="Floor-1"  color="#5140FF"/>
                    <Floor name="Floor-2" color="#42FFFF"/>
                    <Floor name="Floor-3" color="#42FFFF"/>
                
                </div>
                
            </div>
        </>
    );
}