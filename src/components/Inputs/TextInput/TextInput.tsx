import { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { TextInputStyled } from "./TextInputStyled";

interface Props {
  value: string;
  name: string;
  placeholder: string;
  onChange: (name: string, value: string) => void;
  className?: string;
}

const TextInput = ({
  value,
  name,
  placeholder,
  onChange,
  className,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <TextInputStyled className={className}>
      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        className="text-input"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </TextInputStyled>
  );
};

export default TextInput;
