import { useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (value: string) => void;
  placeholder?: string;
}
export default function DropDown({
  options,
  onSelect,
  placeholder = "Select an option",
}: DropdownProps) {
  const [selected, setSelected] = useState<string | "">("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelected(value);
    onSelect(value);
  };

  return (
    <div className="relative w-64">
      <select
        className="w-full px-4 py-2 bg-white border rounded-lg shadow-md focus:outline-none"
        value={selected}
        onChange={handleChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
