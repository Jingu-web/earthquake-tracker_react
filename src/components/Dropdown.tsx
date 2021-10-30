import { FC, useState, Fragment } from "react";
import { connect } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import { periods } from "../constants/periods";
import { changeStarttime } from "../store/actions";
import { convertDropdownValue } from "../utils/convertDropdownValue";

export interface ReactstrapDropdownProps {
  changeStarttime: (arg1: string) => void;
}

const ReactstrapDropdown: FC<ReactstrapDropdownProps> = ({
  changeStarttime,
}) => {
  const [dropdownValue, setDropdownValue] = useState("3日間");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    dropdownOpen ? setDropdownOpen(false) : setDropdownOpen(true);
  };

  const changeDropdownValue = (e: any) => {
    const dropdownvalue = e.currentTarget.textContent;
    setDropdownValue(dropdownvalue);
    changeStarttime(convertDropdownValue(dropdownvalue));
  };

  console.log({ periods });

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {dropdownValue}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {periods.map((period: string, id: number) => (
            <div className="py-2">
              <Menu.Item
                as="li"
                key={id}
                className="text-gray-700 block text-sm hover:bg-gray-100"
              >
                {period}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const mapDispatchToProps = { changeStarttime };

export default connect(null, mapDispatchToProps)(ReactstrapDropdown);
