import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq">
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h2>FAQ</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-10 col-11 mx-auto">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What is different from anywhere to your web app?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century who is thought to have scrambled parts of Cicero's
                      De Finibus Bonorum et Malorum for use in a type specimen
                      book. It usually begins with: “Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.”
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    What is the latest feature of your app ?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century who is thought to have scrambled parts of Cicero's
                      De Finibus Bonorum et Malorum for use in a type specimen
                      book. It usually begins with: “Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.”
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How I can use your app ?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century who is thought to have scrambled parts of Cicero's
                      De Finibus Bonorum et Malorum for use in a type specimen
                      book. It usually begins with: “Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.”
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsefour"
                    aria-expanded="false"
                    aria-controls="flush-collapsefour"
                  >
                    How i got helping center near by my location to use your
                    app?
                  </button>
                </h2>
                <div
                  id="flush-collapsefour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century who is thought to have scrambled parts of Cicero's
                      De Finibus Bonorum et Malorum for use in a type specimen
                      book. It usually begins with: “Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.”
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsefive"
                    aria-expanded="false"
                    aria-controls="flush-collapsefive"
                  >
                    Is there any cons of your app to aware us?
                  </button>
                </h2>
                <div
                  id="flush-collapsefive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century who is thought to have scrambled parts of Cicero's
                      De Finibus Bonorum et Malorum for use in a type specimen
                      book. It usually begins with: “Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
