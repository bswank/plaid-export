import { toast } from 'react-toastify';
import styled from 'styled-components';

type BadgeVariant = 'success' | 'neutral' | 'error';

interface StyledBadgeProps {
  $variant: BadgeVariant;
}

const StyledBadge = styled.span<StyledBadgeProps>`
  display: inline-flex;
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ $variant }) => {
    switch ($variant) {
      case 'success':
        return 'var(--success)';
      case 'neutral':
        return 'var(--warning)';
      case 'error':
        return 'var(--error)';
      default:
        return '';
    }
  }};
  background-color: ${({ $variant }) => {
    switch ($variant) {
      case 'success':
        return 'var(--success--surface)';
      case 'neutral':
        return 'var(--warning--surface)';
      case 'error':
        return 'var(--error--surface)';
      default:
        return '';
    }
  }};
  border-radius: 2px;
`;

interface Props {
  variant: BadgeVariant;
  children: React.ReactNode;
}

export default function Badge({ variant, children }: Props): JSX.Element {
  toast.success('Congratulations, something good happened!');
  toast.error('Congratulations, something bad happened!');
  toast.warning('Congratulations, something neutral happened!');
  return <StyledBadge $variant={variant}>{children}</StyledBadge>;
}
