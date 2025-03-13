export default function Header({logo, batch}) {
  return (
    <header id="header">
      <img src={logo} alt="PN Logo" />
      <h1>Students results for {batch}</h1>
    </header>
  );
}