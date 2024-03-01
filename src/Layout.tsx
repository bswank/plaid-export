interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div>
      Layout....
      {children}
    </div>
  );
}
