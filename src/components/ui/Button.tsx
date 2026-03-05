import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button = ({ children, type = 'button', onClick }: ButtonProps) =>  return (
    <button type={type} onClick={onClick} className="button" aria-label="Button">
      {children}
    </button>
  );
};

export default Button;