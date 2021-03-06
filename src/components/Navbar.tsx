import { FC, useState } from "react";
import { connect } from "react-redux";

import Dropdown from "./Dropdown";
import InfoTip from "./Infotip";
import {
  changeStarttime,
  changeEndtime,
  changeDropdownValue,
} from "../store/actions";

export interface NavbarProps {
  changeStarttime: (arg1: any) => void;
  changeEndtime: (arg1: string) => void;
  changeDropdownValue: (arg1: string) => void;
}

const Navbar: FC<NavbarProps> = ({
  changeStarttime,
  changeEndtime,
  changeDropdownValue,
}) => {
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const [starttimeTooltipOpen, setStarttimeTooltipOpen] = useState(false);
  const [endtimeTooltipOpen, setEndtimeTooltipOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="navbar-brand mr-auto mr-lg-0">Earthquakes</div>
      <button
        className="navbar-toggler p-0 border-0"
        type="button"
        data-toggle="offcanvas"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse offcanvas-collapse">
        <ul className="navbar-nav mr-auto mt-1">
          <Dropdown />
        </ul>
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={(e) => {
            changeDropdownValue("期間を選択中");
            changeStarttime(starttime);
            changeEndtime(endtime);
            e.preventDefault();
          }}
        >
          <input
            className="form-control mr-sm-2"
            id="starttime"
            type="text"
            placeholder="Search..."
            aria-label="Search"
            value={starttime}
            onChange={(e) => setStarttime(e.target.value)}
          />
          <InfoTip
            target={"starttime"}
            tooltipOpen={starttimeTooltipOpen}
            setTooltipOpen={setStarttimeTooltipOpen}
          />

          <input
            className="form-control mr-sm-2"
            id="endtime"
            type="text"
            placeholder="End time"
            aria-label="Search"
            value={endtime}
            onChange={(e) => setEndtime(e.target.value)}
          />
          <InfoTip
            target={"endtime"}
            tooltipOpen={endtimeTooltipOpen}
            setTooltipOpen={setEndtimeTooltipOpen}
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

const mapDispatchToProps = {
  changeStarttime,
  changeEndtime,
  changeDropdownValue,
};

export default connect(null, mapDispatchToProps)(Navbar);
