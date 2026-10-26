import ButtonImpl from '@repo/ui/components/button';
import type { ComponentProps } from 'react';

function Button(props: ComponentProps<typeof ButtonImpl>) {
  return <ButtonImpl {...props} />;
}

export default Button;
