import { Operator } from "./Operators";
import { Defects } from "./defectsReport";
import { Route, Routes, BrowseRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
export const Center = () => {
  return (
    <>
      <div className="row">
        <div className="col d-flex justify-content-center fs-4 fw-bold">
          <span className="mx-3">
            <Link to="/Operator">
            <button type="button" className="bg-info border border-0 rounded-bottom py-2">
              Operators
            </button>
            </Link>
            
          </span>
          <span className="mx-3">
          <Link to="/Defects">
            <button type="button" className="bg-info border border-0 rounded-bottom py-2">
              Defect Report
            </button>
            </Link>
          </span>
        </div>
      </div>
      <div className="row ">
        <div className="col">
          <Routes>
            <Route exact path="/Operator" element={<Operator />} />
            <Route path="/" element={<Operator />} />
            <Route exact path="/Defects" element={<Defects />} />
            <Route />
          </Routes>
        </div>
      </div>
    </>
  );
};
