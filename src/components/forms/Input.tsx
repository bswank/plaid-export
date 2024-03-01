import { FieldAttributes } from 'formik';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
`;

const StyledInput = styled.input`
  display: block;
`;

const StyledError = styled.div``;

export default function Input({
  id,
  label,
  error,
  errorMessage,
  ...props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: FieldAttributes<any>): JSX.Element {
  return (
    <>
      <StyledLabel htmlFor={id}>
        {label}
        <StyledInput id={id} {...props} />
      </StyledLabel>
      {error && <StyledError>{errorMessage}</StyledError>}
    </>
  );
}
