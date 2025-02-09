import React, {useState} from 'react';
import DropDownArrow from "@/components/UI/IconsComponents/DropDownArrow";
import {CustomCustomSelectStyled} from "@/components/UI/CustomSelect/styled";

const CustomSelect = ({options, defaultOptions, border, disable, selectValue}) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [open, setOpen] = useState(false);

  const toggleDropdown = (event) => {
    if (disable) return;
    setOpen(!open);
  };

  const handleItemClick = (item) => {
    if (selectedItem === item) return;
    selectValue(item);
    setSelectedItem(item);
  }

  return (
    <CustomCustomSelectStyled>
      <div
        className={`${border && "border"} ${disable && "disable"} dropdownHeader`}
        onClick={toggleDropdown}
        data-selected-items={selectedItem}
      >
        {selectedItem ? selectedItem : defaultOptions}
        <div className={`icon ${open && "open"}`}>
          <DropDownArrow/>
        </div>
      </div>

      <div className={`dropdownBody ${open && 'open'}`}>
        <div className='dropdownItem default'>
          {defaultOptions}
        </div>

        {options?.map((item) => (
          <div className='dropdownItem'
               onClick={e => {
                 handleItemClick(item)
                 toggleDropdown()
               }}
               id={item} key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </CustomCustomSelectStyled>
  );
};

export default CustomSelect;