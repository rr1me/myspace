import s from './Menu.module.scss';
import { ReactNode } from 'react';

const Menu = ({ children }: {children: ReactNode}) => {
	return (
		<section className={s.menu}>
			<nav className={s.nav}>

			</nav>

			{children}
		</section>
	);
};

export default Menu;
