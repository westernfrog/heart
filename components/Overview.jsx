import { useState } from "react";
import lovePoems from "./Poems";

export default function Overview() {
  const [poem, setPoem] = useState("");

  const handleGeneratePoem = () => {
    setPoem(lovePoems[Math.floor(Math.random() * lovePoems.length)]);
  };
  return (
    <>
      <div
        className="container-fluid text-niconne fw-bolder py-3 rounded-bottom"
        style={{ backgroundColor: "#d52e3f" }}
      >
        <h1 className="rose lh-1 mb-0 text-center">V</h1>
        <h1 className="text-center display-1 fw-bold mb-0">
          alentine&apos;s day
        </h1>
      </div>
      <div className="col-8 mx-auto text-center py-3">
        <button
          type="button"
          className="btn btn-sm btn-white btn-shrink rounded-pill border border-3 p-5 text-dm fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={handleGeneratePoem}
          style={{ fontSize: "13px" }}
        >
          some random poems which you know i made for you, ily!
        </button>
      </div>
      <div className="container-fluid text-dm text-center col-8 mx-auto">
        <p className="fst-italic fw-bold mb-0">
          <i className="fa-solid fa-quote-left me-2 fst-italic"></i>i love you
          more each day, more than words could ever say
          <i className="fa-solid fa-quote-right ms-2 fst-italic"></i>
        </p>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content text-rubik bg-light border-0 rounded">
            <div className="modal-header border-0">
              <h5 className="modal-title text-rubik" id="ModalLabel">
                Poem for you!
              </h5>
            </div>
            <div className="modal-body py-0 fs-7">
              <p className="text-dm mb-0">Happy Valentine&apos;s Day ❤️</p>
              <p className="text-dm">558th day</p>
              <textarea
                className="form-control text-dm border-0 rounded p-3"
                rows="6"
                value={poem}
                disabled
                style={{ boxShadow: "none", resize: "none", fontSize: "13px" }}
              ></textarea>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-white btn-sm btn-shrink"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
