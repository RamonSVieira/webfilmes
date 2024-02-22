import { FunctionComponent, ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const Button: FunctionComponent<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => <button className={twMerge('px-2 py-1', className)} {...props} />;
export default Button;
