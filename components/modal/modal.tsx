/* eslint-disable react/react-in-jsx-scope */
import React, { ReactNode } from 'react';
import { Dialog } from '@headlessui/react';
import classNames from 'classnames';
import styles from './modal.module.scss'

export interface Props {
  children: ReactNode;
  isOpen: boolean;
  isClose: () => void;
  width?: number;
  height?: number;
  floatRight?: boolean;
  size: string;
  defaultWidth?: boolean;

}

const Modal = ({ children, isOpen, isClose, width, height, floatRight, size }: Props) => (
  <Dialog open={isOpen} onClose={isClose} className={classNames(floatRight ? styles.modal2 : styles.modal)}>
    <div
      className={classNames(floatRight ? styles.modal__content2 : styles.modal__content, styles[size])}
      style={{ width: `${width}px`, minHeight: `${height}` }}
    >
      <Dialog.Overlay className="" />

      <div className="">{children}</div>
    </div>
  </Dialog>
);

Modal.defaultProps = {
  floatRight: false,
  size: 'lg',
  isClose: () => {}
};

export default Modal;
