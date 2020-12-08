import React, { FC } from 'react';

import styles from './Button.module.scss';

export const Button: FC = ({ children }) => {
  console.log(styles);
  return (
    <button className={styles.button}>{children}</button>
  );
}
