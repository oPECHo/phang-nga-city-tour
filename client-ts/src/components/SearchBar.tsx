import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const SearchBar = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">ค้นหา</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="text-end">
            <div className="dropdown">
              <button className="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <span>หมวดหมู่</span>
                <i className="fa fa-caret-down"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end" id="dropdownMenu" data-bs-popper="static">
                <li><a className="dropdown-item" href="/Genre/All">ทั้งหมด</a></li>
                <li><a className="dropdown-item" href="/Genre/One%20day%20trip">ทริปวันเดียว</a></li>
                <li><a className="dropdown-item" href="/Genre/Package">แพ็คเกจ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
