import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <div class="myCart shadow-lg d-flex flex-column justify-content-center align-items-center">



        <button
          class="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
        >
          <div>
            <div
              class="d-flex flex-column justify-content-center align-items-center p-2"
              style={{
                backgroundColor: "rgb(85, 88, 77)",
                color: "rgb(253, 214, 112)",
              }}
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="fs-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
              <p class="m-0">
                <span class="pe-1">1</span>
                <span>ITEMS</span>
              </p>
            </div>
            <p
              class="m-0 px-2 wrap"
              style={{ backgroundColor: "rgb(248, 248, 248)" }}
            >
              <span>৳</span> 160
            </p>
          </div>
        </button>
      </div>
      <div
        style={{ marginTop: "79px" }}
        class="offcanvas offcanvas-end mycanvas" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel" >Total Item ({'3'})</h5>

          <button

            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div class="true">
          <div class="offcanvas-body">
            <div class="container custom_cart_page mx-auto  show">
              <div class="d-flex align-items-center">
                <img
                  src="https://icon2.cleanpng.com/20180331/ezq/kisspng-catering-food-computer-icons-logo-event-management-catering-5abf487c5eb658.714031151522485372388.jpg"
                  class="img-fuild"
                  alt=""
                  style={{ width: "1.5rem" }}
                />
                <div class="d-flex flex-column ms-3">
                  <span>Ordered From</span>
                  <span style={{ color: "rgb(244, 111, 34)" }}>Chunk - </span>
                </div>
              </div>
              <div class="card p-3 px-2 mt-4">
                <div
                  class="container position-relative py-3"
                  style={{ overflowWrap: "anywhere" }}
                >
                  <div
                    class="row"
                    style={{ borderBottom: "1px solid rgb(226, 197, 197)" }}
                  >
                    <div class="col-md-6">
                      <h6 style={{ fontWeight: "bolder" }}>Cheese Nan </h6>
                      <span style={{ fontSize: "0.7rem", color: "gray" }}>
                        Toppings: No Toppings
                      </span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center col-md-6 ">
                      <div class="">
                        <span> Tk. 50</span>
                        <span
                          style={{
                            color: "rgb(244, 111, 34)",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path>
                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                          </svg>
                        </span>
                        <span>7</span>
                        <span
                          style={{
                            color: "rgb(244, 111, 34)",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                          </svg>
                        </span>
                      </div>
                      <div class="ms-4">
                        <span>350TK</span>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn-close btn-sm cross"></button>
                </div>
                <div
                  class="container position-relative py-3"
                  style={{ overflowWrap: "anywhere" }}
                >
                  <div
                    class="row"
                    style={{ borderBottom: "1px solid rgb(226, 197, 197)" }}
                  >
                    <div class="col-md-6">
                      <h6 style={{ fontWeight: "bolder" }}>Cheese Nan </h6>
                      <span style={{ fontSize: "0.7rem", color: "gray" }}>
                        Toppings: Cheese25 tk
                      </span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center col-md-6 ">
                      <div class="">
                        <span> Tk. 50</span>
                        <span
                          style={{
                            color: "rgb(244, 111, 34)",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path>
                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                          </svg>
                        </span>
                        <span>7</span>
                        <span
                          style={{
                            color: "rgb(244, 111, 34)",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                          </svg>
                        </span>
                      </div>
                      <div class="ms-4">
                        <span>525TK</span>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn-close btn-sm cross"></button>
                </div>
                <div
                  class="container position-relative py-3"
                  style={{ overflowWrap: "anywhere" }}
                >
                  <div
                    class="row"
                    style={{ borderBottom: "1px solid rgb(226, 197, 197)" }}
                  >
                    <div class="col-md-6">
                      <h6 style={{ fontWeight: "bolder" }}>Cheese Nan </h6>
                      <span style={{ fontSize: "0.7rem", color: "gray" }}>
                        Toppings: Cheese25 tk
                      </span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center col-md-6 ">
                      <div class="">
                        <span> Tk. 50</span>
                        <span
                          style={{
                            color: "rgb(244, 111, 34)",
                            fontSize: " 20px",
                            cursor: "pointer",
                          }}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path>
                            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
                          </svg>
                        </span>
                        <span>7</span>
                        <span
                          style={{
                            color: "rgb(244, 111, 34)",
                            fontSize: "20px",
                            cursor: "pointer",
                          }}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                          </svg>
                        </span>
                      </div>
                      <div class="ms-4">
                        <span>525TK</span>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn-close btn-sm cross"></button>
                </div>
                <div
                  class="py-3"
                  style={{ borderBottom: "1px solid rgb(226, 197, 197)" }}
                >
                  <div class="d-flex justify-content-between align-items-center">
                    <span style={{ fontSize: "0.9rem", color: "gray" }}>
                      Food Price
                    </span>
                    <span style={{ fontSize: "0.9rem", color: "gray" }}>
                      Tk. 1400
                    </span>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <span style={{ fontSize: "0.9rem", color: "gray" }}>
                      Delivery Fee
                    </span>
                    <span style={{ fontSize: "0.9rem", color: "gray" }}>
                      Tk. 50
                    </span>
                  </div>
                </div>
                <div class="pt-3">
                  <div class="d-flex justify-content-between align-items-center">
                    <span style={{ fontSize: "1.1rem", color: "black" }}>
                      Total
                    </span>
                    <div class="d-flex flex-column">
                      <span style={{ fontSize: "1.1rem", color: "orangered" }}>
                        1450
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn  rider-tip pointer mt-3 py-3 text-white " style={{ backgroundColor: 'rgb(244, 111, 34)', width: '100%' }}><Link to="/my-cart">Place Order. Pay Tk. 1450</Link> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
