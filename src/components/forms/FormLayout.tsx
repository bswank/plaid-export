import styled from 'styled-components';

const StyledLayout = styled.div``;

interface Props {
  children: React.ReactNode;
}

export default function FormLayout({ children }: Props): JSX.Element {
  return <StyledLayout>{children}</StyledLayout>;
}
