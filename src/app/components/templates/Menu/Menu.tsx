import s from './Menu.module.scss';
import { ReactNode } from 'react';
import NavigationMenu from '@/app/components/organisms/NavigationMenu/NavigationMenu';

const Menu = ({ children }: {children: ReactNode}) => {
	return (
		<section className={s.menu}>
			<NavigationMenu/>
			{children}
		</section>
	);
};

export default Menu;
