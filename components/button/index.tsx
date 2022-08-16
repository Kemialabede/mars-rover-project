import React, { HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean | any;
  type?: 'button' | 'submit';
  width?: number;
  onClick?: (data?: any) => void;
}
const Button = ({
  children,
  width,
  disabled = false,
  type = 'button',
  onClick,
  loading,
  ...props
}: Props) => {
  const { className, ...args } = props;

  return (
    <button
      onClick={onClick}
      type={type}
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
