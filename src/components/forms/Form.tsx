/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form as FormikForm, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import FormLayout from './FormLayout';

interface Props {
  validationSchema: Yup.ObjectSchema<any>;
  initialValues: any;
  onSubmit: (values: any, helpers: FormikHelpers<any>) => void;
  actions: React.ReactNode;
  children: React.ReactNode;
}

export default function Form({
  validationSchema,
  initialValues,
  onSubmit,
  actions,
  children,
}: Props): JSX.Element {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      enableReinitialize
    >
      <FormikForm>
        <FormLayout>
          {children}
          {actions}
        </FormLayout>
      </FormikForm>
    </Formik>
  );
}
