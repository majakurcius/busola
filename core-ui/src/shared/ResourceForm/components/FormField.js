import React from 'react';
import classnames from 'classnames';

import { Label } from './Label';

export function FormField({
  simple,
  advanced,
  propertyPath,
  label,
  input,
  className,
  required,
  disabled,
  tooltipContent,
  isAdvanced,
  defaultValue,
  messageStrip,
  ...props
}) {
  const { validate, ...inputProps } = props;
  return (
    <div className={classnames('fd-row form-field', className)}>
      <div className="fd-col fd-col-md--4 form-field__label">
        <Label required={required && !disabled} tooltipContent={tooltipContent}>
          {label}
        </Label>
      </div>
      <div className="fd-col fd-col-md--7">
        {messageStrip
          ? messageStrip
          : input({ required, disabled, ...inputProps })}
      </div>
    </div>
  );
}
