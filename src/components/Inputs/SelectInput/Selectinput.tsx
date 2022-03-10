import Select, { SingleValue } from "react-select";
import { SelectInputStyled } from "./SelectInputStyled";

type ReactSelectOptionsType = {
  value: string;
  label: string;
};

interface Props {
  name: string;
  value: string;
  options: string[];
  onChange: (name: string, value: string) => void;
  className?: string;
}

const SelectInput = ({ name, value, options, onChange, className }: Props) => {
  const modifiedOptions = options.map((option) => ({
    value: option,
    label: option,
  }));
  const handleChange = (newValue: SingleValue<ReactSelectOptionsType>) => {
    const newValueAsString = newValue?.value || "";
    onChange(name, newValueAsString);
  };

  const selectValue = value ? { value, label: value } : undefined;

  return (
    <SelectInputStyled className={className}>
      <Select<ReactSelectOptionsType>
        value={selectValue}
        options={modifiedOptions}
        onChange={handleChange}
        className="select-input"
        classNamePrefix="select-input"
        placeholder="Filter by Region"
      />
    </SelectInputStyled>
  );
};

export default SelectInput;
