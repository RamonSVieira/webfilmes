import { FunctionComponent, SelectHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

const Select: FunctionComponent<SelectHTMLAttributes<HTMLSelectElement>> = ({
  className,
  ...props
}) => (
  <select
    className={twMerge('px-2 py-1 text-slate-900', className)}
    {...props}
  />
);
export default Select;
