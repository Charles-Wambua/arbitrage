import React from 'react';
import './css/dashboard.css';
import 'iconify-icon'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src="path/to/logo.png" alt="Logo" />
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active"><a href="/" > <iconify-icon icon="circum:home"></iconify-icon> Home</a></li>
            <li><a href="/profile"> <iconify-icon icon="iconamoon:profile-circle-thin"></iconify-icon>Profile</a></li>
            <li><a href="/register"><iconify-icon icon="ph:trademark-registered-thin"></iconify-icon>New Register</a></li>
            <li><a href="/network"> <iconify-icon icon="ph:network-thin"></iconify-icon>Network</a></li>
            <li><a href="/reorder"> <iconify-icon icon="mdi-light:cart"></iconify-icon>Product Re-order</a></li>
            <li><a href="/transaction"> <iconify-icon icon="tdesign:undertake-transaction"></iconify-icon>Transaction</a></li>
            <li><a href="/history"> <iconify-icon icon="material-symbols-light:history"></iconify-icon>History</a></li>
            <li><a href="/reports" > <iconify-icon icon="mdi:report-box-multiple-outline"></iconify-icon>Reports</a></li>
            <li><a href="/support"> <iconify-icon icon="flat-color-icons:customer-support"></iconify-icon>Support Ticketing</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <div className="wallet-info">
            <div>PIN: $1.25</div>
            <div>Cash Wallet: $41.46</div>
            <div>Promo Wallet: $7,559.29</div>
            <div>Upgrade Wallet: $0.00</div>
          </div>
          <div className="profile-info">
            <span>ONLINEINVESTOR</span>
            <div className="profile-icon">&#128100;</div>
          </div>
        </header>
        <div className="content-section">
          <div className="pv-volume">
            <div className="pv-left">
              <h3>1,328,321.00</h3>
              <p>Left PV</p>
            </div>
            <div className="pv-right">
              <h3>90.00</h3>
              <p>Right PV</p>
            </div>
          </div>
          <div className="pv-details">
            <h2>PV Volume</h2>
            <table>
              <thead>
                <tr>
                  <th>PV TYPE</th>
                  <th>LEFT</th>
                  <th>RIGHT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Today</td>
                  <td>540.00</td>
                  <td>90.00</td>
                </tr>
                <tr>
                  <td>Yesterday</td>
                  <td>1,327,781.00</td>
                  <td>0.00</td>
                </tr>
                <tr>
                  <td>Lifetime</td>
                  <td>1,382,978.00</td>
                  <td>54,775.00</td>
                </tr>
              </tbody>
            </table>
            <button className="placement-btn">View Placement Network</button>
          </div>
          <div className="bonus-section">
            <h2>Bonus</h2>
            <ul>
              <li>Sponsor Bonus: $0.00</li>
              <li>Roll Up Bonus: $0.00</li>
              <li>Upgrade Bonus: $0.00</li>
              <li>Pairing Bonus: $1,028.00</li>
              <li>Key In Bonus: $0.00</li>
            </ul>
            <button className="view-more-btn">View More</button>
          </div>
          <div className="accumulated-amount">
            <h2>$46,869.00</h2>
            <p>Accumulated Amount</p>
            <p>(Joined since 29 Sep 2022 10:10:05am)</p>
          </div>
          <div className="remaining-days">
            <h2>0 Days</h2>
            <p>Remaining UT Days</p>
            <button className="upgrade-btn">Upgrade Now</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
