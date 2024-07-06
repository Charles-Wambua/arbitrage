import React, { useState } from 'react';
import './css/Aside.css'; // Ensure this CSS file exists and is correctly named

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleResize = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`app ${isExpanded ? 'sb-expanded' : ''}`}>
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
              <a href="#">
                <i className="bx bx-grid-alt"></i>
                <span>Explore</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-carousel"></i>
                <span>Slideshow</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-collection"></i>
                <span>Collections</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-cloud-download"></i>
                <span>Downloads</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-chat"></i>
                <span>Messages</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bx-cog"></i>
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={handleResize}>
                <i className={`bx ${isExpanded ? 'bx-chevrons-left' : 'bx-chevrons-right'}`}></i>
                <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
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

        <div className="placeholder">
          <div className="ph-1"></div>
          <div className="ph-2"></div>
          <div className="ph-3"></div>
          <div className="ph-4"></div>
          <div className="ph-5"></div>
          <div className="ph-6"></div>
          <div className="ph-7"></div>
          <div className="ph-8"></div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
