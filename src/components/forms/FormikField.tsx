import { Field, FieldAttributes, useField } from 'formik';
import { nanoid } from 'nanoid';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props extends FieldAttributes<any> {
  name: string;
  children?: React.ReactNode;
}

export default function FormikField({
  name,
  children,
  ...props
}: Props): JSX.Element {
  const [, meta] = useField(name);

  // Avoid ID collisions by prefixing with a unique string
  const prefix = nanoid();

  return (
    <Field
      id={`${prefix}_${name}`}
      name={name}
      error={meta.touched && !!meta.error}
      errorMessage={meta.error}
      {...props}
    >
      {children}
    </Field>
  );
}
