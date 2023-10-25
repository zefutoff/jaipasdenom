import React from 'react';

interface ButtonProps {
  label: React.JSX.Element | string;
  onClick: () => void;
  className: string;
}

function Button({ label, onClick, className }: ButtonProps) {
  return (
    <button className={className} onClick={onClick} type="button">
      {label}
    </button>
  );
}

export default Button;
