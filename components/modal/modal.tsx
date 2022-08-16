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
  defaultWidth?: boolean;

}

const Modal = ({ children, isOpen, isClose, width, height }: Props) => (
  <Dialog open={isOpen} onClose={isClose} className={styles.modal}>
    <div
      className={classNames(styles.modal__content)}
      style={{ width: `${width}px`, minHeight: `${height}` }}
    >
      <Dialog.Overlay className="" />

      <div className="">{children}</div>
    </div>
  </Dialog>
);

Modal.defaultProps = {
  isClose: () => {}
};

export default Modal;
