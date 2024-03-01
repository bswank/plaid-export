import styled from 'styled-components';

const StyledButton = styled.button`
  &:active {
    opacity: 0.85;
  }

  &:disabled {
    background-color: var(--gray);
    pointer-events: none;
  }

  &.loading {
    color: transparent;
    background-color: var(--gray--background) !important;
    pointer-events: none;
  }

  /* svg:first-child {
    margin: auto 0 auto 5px;
    stroke-width: 3px;
  }

  svg:first-child {
    margin: auto 5px auto 0;
    stroke-width: 3px;
  } */
`;

const LoadingIndicator = styled.div`
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) scale(0.6, 0.6);
`;

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export default function Button({
  children,
  isLoading,
  ...props
}: Props): JSX.Element {
  return (
    <StyledButton {...props}>
      {children}
      {isLoading && (
        <LoadingIndicator className="loader-inner ball-clip-rotate">
          <div
            style={{
              border: '2px solid transparent',
              borderBottomColor: 'var(--gray)',
            }}
          />
        </LoadingIndicator>
      )}
    </StyledButton>
  );
}
