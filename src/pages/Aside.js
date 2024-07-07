import React, { useState, useEffect } from "react";
import "./css/Aside.css";
import feather from "feather-icons";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    feather.replace();
  }, []);

  const handleResize = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={`app ${isExpanded ? "sb-expanded" : ""}`}>
      <header className="header">
        <li className="header-li">
          <a href="#" onClick={handleResize} className="header-a">
            <i
              className={`bx ${
                isExpanded ? "bx-chevrons-left" : "bx-chevrons-right"
              }`}
            ></i>
            <span>{isExpanded ? "" : ""}</span>
          </a>
        </li>
      </header>
      <aside>
        <nav>
          <ul>
            <li>
              <a href="#" className="active">
                <i className="bx bx-home-circle"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/register">
                <i className="bx bx-user-plus"></i>
                <span>New Register</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-user"></i>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-network-chart"></i>
                <span>Network</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-repost"></i>
                <span>Product Re-order</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-transfer-alt"></i>
                <span>Transaction</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-history"></i>
                <span>History</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-chart"></i>
                <span>Reports</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-support"></i>
                <span>Support</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={handleResize}>
                <i
                  className={`bx ${
                    isExpanded ? "bx-chevrons-left" : "bx-chevrons-right"
                  }`}
                ></i>
                <span>{isExpanded ? "Collapse" : "Expand"}</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main>
        <h1>Expandable Sidebar</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ab non
          dolorem reiciendis harum quasi inventore a eum soluta. Suscipit id
          asperiores libero veritatis ducimus sapiente minus reprehenderit
          eligendi pariatur.
        </p>
        <header></header>

        <div className="placeholderr">
          <div className="ph-1">
            <div className="col-md-6 col-sm-12 special-card">
              <h1 className="specialText">
                <b>1,307,991.00</b>
              </h1>
              <h4 className="text-center specialText">Left PV</h4>
            </div>
            <div className="col-md-6 col-sm-12 special-card">
              <h1 className="specialText">
                <b>472.50</b>
              </h1>
              <h4 className="text-center specialText">Right PV</h4>
            </div>
          </div>
          <div className="ph-2">b</div>
          <div className="ph-3">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title font-weight-bolder">PV Volume</h4>
              </div>
              <div class="card-body p-0">
                <div class="table-responsive">
                  <div class="mb-50 px-0 col-12">
                    <table class="table">
                      <thead>
                        <tr>
                          <th class="pl-2">PV Type</th>
                          <th class="text-center">Left</th>
                          <th class="text-center">Right</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar bg-light-warning mr-1">
                                <div class="avatar-content">
                                  <i
                                    data-feather="coffee"
                                    class="font-medium-3"
                                    style={{ color: "orange" }}
                                  ></i>
                                </div>
                              </div>
                              <span>Today</span>
                            </div>
                          </td>
                          <td>
                            <div class="text-center font-weight-bolder">
                              3,757.50
                            </div>
                          </td>
                          <td>
                            <div class="text-center font-weight-bolder">
                              472.50
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar bg-light-primary mr-1">
                                <div class="avatar-content">
                                  <i
                                    data-feather="bar-chart-2"
                                    class="font-medium-3"
                                    style={{ color: "#6610f2" }}
                                  ></i>
                                </div>
                              </div>
                              <span>Yesterday</span>
                            </div>
                          </td>
                          <td>
                            <div class="text-center font-weight-bolder">
                              1,304,278.50
                            </div>
                          </td>
                          <td>
                            <div class="text-center font-weight-bolder">
                              45.00
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="avatar bg-light-info mr-1">
                                <div class="avatar-content">
                                  <i
                                    data-feather="clock"
                                    class="font-medium-3"
                                    style={{ color: "#00cfe8" }}
                                  ></i>
                                </div>
                              </div>
                              <span>Lifetime</span>
                            </div>
                          </td>
                          <td>
                            <div class="text-center font-weight-bolder">
                              1,359,745.50
                            </div>
                          </td>
                          <td>
                            <div class="text-center font-weight-bolder">
                              52,255.00
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <a
                href="https://member.divasecretintl.com/backend/placement-network-genealogy"
                class="mx-1 mb-1 btn btn-primary"
              >
                View Placement Network
              </a>
            </div>
          </div>
          <div className="ph-4">
            <div class="card-container">
              <div class="card text-center">
                <div class="card-body my-1">
                  <div class="avatar bg-light-primary p-50 mb-1">
                    <div class="avatar-content">
                      <i
                        data-feather="trending-up"
                        class="font-medium-5"
                        style={{ color: "gold" }}
                      ></i>
                    </div>
                  </div>
                  <h2 class="font-weight-bolder">$46,359.00</h2>
                  <p class="card-text">
                    Accumulated Amount
                    <br />
                    <small>(Joined since 29 Sep 2022 10:10:05am)</small>
                  </p>
                </div>
              </div>

              <div class="card text-center">
                <div class="card-body my-1">
                  <div class="avatar bg-light-primary p-50 mb-1">
                    <div class="avatar-content">
                      <i
                        data-feather="calendar"
                        class="font-medium-5"
                        style={{ color: "gold" }}
                      ></i>
                    </div>
                  </div>
                  <h2 class="font-weight-bolder">0 Days</h2>
                  <p class="card-text">Remaining UT Days</p>
                </div>
                <a
                  href="https://member.divasecretintl.com/backend/upgrade"
                  class="btn btn-primary mb-1 mx-2"
                >
                  Upgrade Now
                </a>
              </div>
            </div>
          </div>
          <div className="ph-5">
            <div class="col-xl-4 col-lg-6 col-12">
              <div class="card card-transaction">
                <div class="card-header">
                  <h4 class="card-title font-weight-bolder">Bonus</h4>
                  <div>This Month</div>
                </div>
                <div class="card-body">
                  <div class="transaction-item">
                    <div class="media">
                      <div class="avatar bg-light-primary rounded">
                        <div class="avatar-content">
                          <i
                            data-feather="dollar-sign"
                            class="avatar-icon font-medium-3"
                            style={{ color: "#00cfe8" }}
                          ></i>
                        </div>
                      </div>
                      <div class="media-body align-self-center">
                        <h6 class="transaction-title">Sponsor Bonus</h6>
                      </div>
                    </div>
                    <div class="font-weight-bolder">
                      <strong>$0.00</strong>
                    </div>
                  </div>
                  <div class="transaction-item">
                    <div class="media">
                      <div class="avatar bg-light-warning rounded">
                        <div class="avatar-content">
                          <i
                            data-feather="dollar-sign"
                            class="avatar-icon font-medium-3"
                            style={{ color: "#ffc107" }}
                          ></i>
                        </div>
                      </div>
                      <div class="media-body align-self-center">
                        <h6 class="transaction-title">Roll Up Bonus</h6>
                      </div>
                    </div>
                    <div class="font-weight-bolder">$0.00</div>
                  </div>
                  <div class="transaction-item">
                    <div class="media">
                      <div class="avatar bg-light-danger rounded">
                        <div class="avatar-content">
                          <i
                            data-feather="dollar-sign"
                            class="avatar-icon font-medium-3"
                            style={{ color: "#28c76f" }}
                          ></i>
                        </div>
                      </div>
                      <div class="media-body align-self-center">
                        <h6 class="transaction-title">Upgrade Bonus</h6>
                      </div>
                    </div>
                    <div class="font-weight-bolder">
                      <strong>$0.00</strong>
                    </div>
                  </div>
                  <div class="transaction-item">
                    <div class="media">
                      <div class="avatar bg-light-success rounded">
                        <div class="avatar-content">
                          <i
                            data-feather="dollar-sign"
                            class="avatar-icon font-medium-3"
                            style={{ color: "#e83e8c" }}
                          ></i>
                        </div>
                      </div>
                      <div class="media-body align-self-center">
                        <h6 class="transaction-title">Pairing Bonus</h6>
                      </div>
                    </div>
                    <div class="font-weight-bolder">$518.00</div>
                  </div>
                  <div class="transaction-item">
                    <div class="media">
                      <div class="avatar bg-light-info rounded">
                        <div class="avatar-content">
                          <i
                            data-feather="dollar-sign"
                            class="avatar-icon font-medium-3"
                            style={{ color: "#6610f2" }}
                          ></i>
                        </div>
                      </div>
                      <div class="media-body align-self-center">
                        <h6 class="transaction-title">Key In Bonus</h6>
                      </div>
                    </div>
                    <div class="font-weight-bolder">$0.00</div>
                  </div>
                </div>
                <a
                  href="https://member.divasecretintl.com/backend/commission"
                  class="btn btn-primary mb-1 mx-2"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
          <div className="ph-6">
            <div class="col-lg-5 col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title font-weight-bolder">
                    Achievement Rank
                  </h4>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-6 col-12">
                      <div class="media">
                        <div class="avatar mr-2 bg-light-primary">
                          <div class="avatar-content">
                            <i data-feather="map-pin" class="font-medium-3"></i>
                          </div>
                        </div>
                        <div class="media-body my-auto">
                          <h4 class="font-weight-bolder mb-0">Current Rank</h4>
                          <p class="card-text font-small-3 mb-0 text-primary">
                            Star Director
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-12">
                      <div class="media">
                        <div class="avatar mr-2 bg-light-primary">
                          <div class="avatar-content">
                            <i
                              data-feather="corner-down-right"
                              class="font-medium-3"
                            ></i>
                          </div>
                        </div>
                        <div class="media-body my-auto">
                          <h4 class="font-weight-bolder mb-0">Next Rank</h4>
                          <p class="card-text font-small-3 mb-0 text-primary">
                            Diamond Director
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ph-7">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title font-weight-bolder">Recruitments</h4>
              </div>
              <div
                class="table-responsive overthrow"
                style={{ maxHeight: "500px" }}
              >
                <table class="table table-bordered" style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th>
                        <strong>Join Date</strong>
                      </th>
                      <th>
                        <strong>Username</strong>
                      </th>

                      <th>
                        <strong>Package</strong>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>13 Jun 2024 5:10:43pm</td>
                      <td>DIVANAJULIA</td>

                      <td>Silver</td>
                    </tr>
                    <tr>
                      <td>13 Jun 2024 3:18:36pm</td>
                      <td>PLULUH</td>

                      <td>Starter</td>
                    </tr>
                    <tr>
                      <td>13 Jun 2024 3:13:35pm</td>
                      <td>PAEMM</td>

                      <td>Starter</td>
                    </tr>
                    <tr>
                      <td>13 Jun 2024 3:07:30pm</td>
                      <td>PAISREAL</td>

                      <td>Starter</td>
                    </tr>
                    <tr>
                      <td>13 Jun 2024 3:01:26pm</td>
                      <td>TOGRACE</td>

                      <td>Starter</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td class="text-right" colspan="3">
                        <a
                          href="https://member.divasecretintl.com/backend/sponsor-genealogy"
                          class="btn btn-primary"
                        >
                          View Sponsor Network
                        </a>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <div className="ph-8"></div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
