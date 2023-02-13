import { useState } from "react";
import lovePoems from "./Poems";

export default function Overview() {
  const [poem, setPoem] = useState("");
  const [heartCount, setHeartCount] = useState(0);

  const handleGeneratePoem = () => {
    setPoem(lovePoems[Math.floor(Math.random() * lovePoems.length)]);
  };

  const handleHeartCount = () => {
    setHeartCount(heartCount + 1);
  };

  return (
    <>
      <div
        className="container-fluid text-niconne fw-bolder py-3 rounded-bottom"
        style={{ backgroundColor: "#d52e3f" }}
      >
        <h1 className="rose lh-1 mb-0 text-center">V</h1>
        <h1 className="text-center display-1 fw-bold mb-0">
          Valentine&apos;s day
        </h1>
      </div>

      <div className="col-8 mx-auto text-center my-5">
        <button
          type="button"
          className="btn btn-sm btn-white btn-shrink rounded text-dm fw-bold shadow-sm"
          style={{ fontSize: "13px" }}
          onClick={handleHeartCount}
        >
          ❤️
        </button>
        <button
          type="button"
          className="btn btn-sm btn-white btn-shrink rounded text-dm fw-bold shadow-sm mx-2"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={handleGeneratePoem}
          style={{ fontSize: "13px" }}
        >
          poems, ily!
        </button>
        <button
          type="button"
          className="btn btn-sm btn-white btn-shrink rounded text-dm fw-bold shadow-sm"
          style={{ fontSize: "13px" }}
        >
          {heartCount}
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
