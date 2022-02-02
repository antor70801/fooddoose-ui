import React from "react";

const MarchentLogin = () => {
  return (
    <div id="login">
      <div className="">
        <div class="row d-flex align-items-center justify-content-center">
          <div
            class="col  col-12 col-md-10 col-lg-6 col-xl-4
					from-parent m-5 p-5 "
          >
            <form
              method="post"
              action=""
              class="border p-3 w-100 bg-white rounded-2 py-5"
            >
              <h1 class="mb-4 text-center" style={{ color: "#f46f22" }}>
                <span class="text-danger font-weight-bold">Foodoose</span>{" "}
                Merchant Login
              </h1>
              <div class="my-3 w-100">
                <label for="email" class="form-label">
                  Email :
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div class="my-3 w-100">
                <label for="password" class="form-label">
                  Password :
                </label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                style={{ background: "#f46f22", width: "100%" }}
                class="btn px-4 ml-md-4 ml-0 mt-md-0 mt-3 text-white"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarchentLogin;
