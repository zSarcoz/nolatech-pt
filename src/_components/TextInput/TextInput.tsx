import React from 'react';

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;  
  labelClassName?: string;  
  containerClassName?: string; 
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  inputClassName = '',       
  labelClassName = '',       
  containerClassName = ''    
}) => {
  return (
    <div className={`flex flex-col my-4 w-full ${containerClassName}`}>
      <label className={`text-sm text-darkBlue font-roboto font-bold ${labelClassName}`}>
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={`w-full p-2 pl-10 mt-4 text-sm font-roboto text-darkBlue border rounded-lg ${inputClassName}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
