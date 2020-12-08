import React from 'react';

import { TextImage } from 'plugins/library/TextImage.component';
import { Button } from 'ui-kit/atoms/Button.component';
import styles from './Editor.module.scss';

export const Editor = () => (<div className={styles.editor}>
  <h1>I'm the editor</h1>
  <TextImage></TextImage>
  <Button>I'm from ui-kit</Button>
</div>);
