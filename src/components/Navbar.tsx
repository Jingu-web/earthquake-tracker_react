import { FC } from "react";

export interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <div className="flex justify-between bg-green-200">
      Earthquake
      <div>
        <button type="submit">Search</button>
      </div>
    </div>
  );
};

export default Navbar;
