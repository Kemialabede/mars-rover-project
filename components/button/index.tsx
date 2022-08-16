import React, { HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme?: 'primary' | 'secondary' | 'plain' | 'cancelBtn';
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  disabled?: boolean | any;
  type?: 'button' | 'submit';
  width?: number;
  wide?: boolean;
  onClick?: (data?: any) => void;
  align?: 'left' | 'center';
}
const Button = ({
  children,
  width,
  size = 'md',
  disabled = false,
  variant = 'solid',
  type = 'button',
  align,
  wide,
  onClick,
  loading,
  theme,
  ...props
}: Props) => {
  const { className, ...args } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      style={{ width: `${width}px` }}
      className={classnames(
        styles.btn)
       }
      disabled={disabled}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
