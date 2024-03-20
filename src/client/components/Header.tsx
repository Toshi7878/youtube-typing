import './Header.css'; // Headerコンポーネントに対応するCSSファイルをインポート
import Link from "next/link";
import { ModeToggle } from './theme-toggle-button'

const Header: React.FC = () => {
	return (
		<header className="header">
			<Link href="/" className="logo">
				My Restaurant
			</Link>
			<nav>
				<ul className="nav-links">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/menu">Menu</Link>
					</li>
					<li>
						<Link href="/locations">Locations</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;