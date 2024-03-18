import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>)=>void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  isLoading: boolean;
}

const Button : React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  isLoading = false
}) => {
  return (
    <button
      type='submit'
      disabled={disabled}
      onClick={onClick}
      className={`
      w-full p-4 font-light rounded-full
                        outline-none transition disabled:opacity-70 
                        disabled:cursor-not-allowed font-sans
                  ${outline ? 'bg-white' : 'bg-custom-orange-2'}
                  ${outline ? 'border-black' : 'border-custom-orange-2'}
                  ${outline ? 'text-black': 'text-white'}
                  ${small ? 'text-sm' : 'text-md'}
                  ${small ? 'py-1' : 'py-3'}
                  ${small ? 'font-light' : 'font-semibold'}
                  ${small ? 'broder-[1px]' : 'border-2'}
                `}
    >
      {label}
    </button>
  )
}

export default Button