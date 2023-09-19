import { MainNav } from "./MainNav";
import { Logo } from "./Logo";
import './header.scss'

export const Header = () => {
  return <header className="header">
    <Logo/>
    <MainNav/>
  </header>;
};
