import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  }, [isOpen]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={() => setIsOpen(!isOpen)}>☰</button>
      {isOpen && (
        <nav>
          <ul>
            <li><Link to="/home">Trang chủ</Link></li>
            <li><Link to="/measurement">Đo lường</Link></li>
            <li><Link to="/report">Báo cáo</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
