import icon from "../../src/chef-claude-icon.png";

export default function Header() {
  return (
    <header>
      <img className='icon' src={icon} />
      <h1 className="title">Chef Claude</h1>
    </header>
  );
}
