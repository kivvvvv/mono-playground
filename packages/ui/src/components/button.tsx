import { Button, ButtonProps } from '@base-ui/react/button';
import styles from './button.module.css';

function ButtonImpl(props: ButtonProps) {
  return (
    <Button className={styles.Button} {...props}>
      Submit
    </Button>
  );
}

export default ButtonImpl;
