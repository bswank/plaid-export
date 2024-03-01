import * as Yup from 'yup';
import Button from './components/common/Button';
import Form from './components/forms/Form';
import FormikField from './components/forms/FormikField';
import Input from './components/forms/Input';

export interface FormValues {
  email: string;
}

const validationSchema: Yup.ObjectSchema<FormValues> = Yup.object().shape({
  email: Yup.string().email().required(),
});

const initialValues: FormValues = {
  email: '',
};

const onSubmit = (values: FormValues) => {
  console.log(values);
};

export default function LoginForm(): JSX.Element {
  return (
    <Form
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      actions={<Button type="submit">Submit</Button>}
    >
      <FormikField name="email" label="Email Address" type="email" as={Input} />
    </Form>
  );
}
