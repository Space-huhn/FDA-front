import React, {useState} from 'react';
import DropDownArrow from "@/components/UI/IconsComponents/DropDownArrow";
import {CustomCustomSelectStyled} from "@/components/UI/CustomSelect/styled";

const CustomSelectOptgroup = ({options, defaultOptions, variant, border, disable, selectValue}) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [open, setOpen] = useState(false);

  const toggleDropdown = (event) => {
    if (disable) return;
    setOpen(!open);
  };

  const handleItemClick = (target) => {
    if (selectedItem === target.id) return;
    selectValue(target.id);
    setSelectedItem(target.id);
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

        {options.map(object => (
          <>
            <div className='optionGroup' key={object.title}>
              {object.title}
            </div>

            {object.array.map((item) => {
              return (<div className='dropdownItem'
                           onClick={e => {
                             handleItemClick(e.target)
                             toggleDropdown()
                           }}
                           id={item}
                           key={item}
              >
                {item}
              </div>)
            })}
          </>
        ))}

      </div>
    </CustomCustomSelectStyled>
  );
};

export default CustomSelectOptgroup;