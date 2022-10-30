import logo from "../assets/logo.png"
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { userLogOut } from "../redux/action/action";
export const Header = ()=>{
    const dispatch = useDispatch();
    const [audit, setAudit] = useState("Audit 1");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const auditChange = (e) => setAudit(e.target.value);
    const handlelogout = ()=>{
      dispatch(userLogOut());  
      console.log("Button is Pressed");
    } 
    return(
<>
    <div className="row header">
        <div className="col-12 col-md-3" >
            <span >
               <img src={logo} alt="logo" style={{height:"100px",width:"100px"}} />
            </span>
        </div>
        <div className="col-12 col-md-6 d-flex  flex-column">
        <div className="row fs-2" >
            
            <span className="d-flex justify-content-center">
            SMART QUALITY MANAGEMENT SYSTEM
        </span>
    </div>
    <div className="row fs-3 fw-bold ">
        <span className="d-flex justify-content-center" onClick={handleShow} role="button">
            {audit}
        </span>
    </div>
    </div>
    <div className="col-6 col-md-2 fs-1 offset-md-1 align-items-center  d-flex justify-content-center" >
            <span role="button" onClick={ handlelogout }>
            <i className="fa fa-power-off"></i>
            </span>
        </div>
    </div>
    


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SELECT AUDIT REPORT</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form.Group className="mb-3">
        <Form.Label>Audit Report Menu</Form.Label>
        <Form.Select onChange={auditChange}>
          <option value = "Audit 1">Audit 1</option>
          <option value = "Audit 2">Audit 2</option>
          <option value = "Audit 3">Audit 3</option>
          <option value = "Audit 4">Audit 4</option>
        </Form.Select></Form.Group></Modal.Body>
      </Modal>
</>

    );
}