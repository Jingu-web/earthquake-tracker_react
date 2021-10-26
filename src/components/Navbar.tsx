import { FC, useState } from "react";
import { connect } from "react-redux";

import { changeQuery } from "../store/actions";

export interface NavbarProps {
  changeQuery: (arg1: any) => void;
}

const Navbar: FC<NavbarProps> = ({ changeQuery }) => {
  const [query, setQuery] = useState("");

  return (
    <nav className="flex justify-between bg-green-200 pt-8">
      <div className="navbar-brand mr-auto mr-lg-0">Earthquakes</div>
      <button
        className="navbar-toggler p-0 border-0"
        type="button"
        data-toggle="offcanvas"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse offcanvas-collapse">
        <ul className="navbar-nav mr-auto mt-1"></ul>
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={(e) => {
            changeQuery(query);
            e.preventDefault();
          }}
        >
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search..."
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

const mapDispatchToProps = { changeQuery };

export default connect(null, mapDispatchToProps)(Navbar);
