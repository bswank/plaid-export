import Badge from './components/common/Badge';

export default function Dashboard(): JSX.Element {
  return (
    <>
      DASH
      <Badge variant="success">Paid</Badge>
      <Badge variant="neutral">Ordered</Badge>
      <Badge variant="error">Cancelled</Badge>
    </>
  );
}
