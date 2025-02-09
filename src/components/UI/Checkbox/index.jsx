import { CustomCheckboxStyled } from "@/components/UI/Checkbox/styled";
import { Checkbox } from "@mui/material";

const CustomCheckbox = ({ label, onChange, checked }) => {
  return (
    <CustomCheckboxStyled
      label={label}
      control={<Checkbox checked={checked}
        className='checkbox'
        onChange={onChange} />}
    />
  );
};

export default CustomCheckbox;