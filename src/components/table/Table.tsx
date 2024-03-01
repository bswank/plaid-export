import React from 'react';
import styled from 'styled-components';

const StyledTableWrapper = styled.div`
  overflow-x: scroll;
`;

const StyledTable = styled.table`
  min-width: 100%;
  border-collapse: collapse;
`;

export default function Table({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <StyledTableWrapper {...props}>
      <StyledTable>{children}</StyledTable>
    </StyledTableWrapper>
  );
}
