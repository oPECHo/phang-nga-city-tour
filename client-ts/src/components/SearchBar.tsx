import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface SearchBarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-between">
        <div className="col-md-6">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="ค้นหาชื่อทัวร์.." aria-label="Search" onChange={onChange} onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
              }
            }} />
          </form>
        </div>
        <div className="col-md-6 text-end">
          <div className="dropdown">
            <button className="btn btn-danger dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ marginTop: '10px' }}>
              <span>หมวดหมู่</span>
              <i className="fa fa-caret-down"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" id="dropdownMenu" data-bs-popper="static">
              <li><a className="dropdown-item" href="/search/All">ทั้งหมด</a></li>
              <li><a className="dropdown-item" href="/search/One-day-trip">ทริปวันเดียว</a></li>
              <li><a className="dropdown-item" href="/search/Package">แพ็คเกจ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
