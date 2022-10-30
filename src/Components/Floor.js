
export const Floor = (props)=>{

 return(
    <>
        <button type="button" className="btn w-75 fs-3 my-3" style={{backgroundColor:props.color}} > <i className="fa fa-building"></i> {props.name}</button>
    </>
 );
}
