import logo from '../images/logo.png'
import { MobileNavigation } from './MobileNavigation'

export const Header = () => {
	return (
		<header className='header' id='header'>
			<div className=' header-container'>
				<img src={logo} alt='Logo' className='logo' />
				<nav className='desktop-nav'>
					<ul className='navigation-list'>
						<li>
							<a href='#header' className='navigation-list__link'>
								Головна
							</a>
						</li>
						<li>
							<a href='#hero' className='navigation-list__link'>
								Галерея
							</a>
						</li>
						<li>
							<a href='#projects' className='navigation-list__link'>
								Проекти
							</a>
						</li>
						<li>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://google.com'
								className='navigation-list__link'
							>
								Сертифікати
							</a>
						</li>
						<li>
							<a href='#footer' className='navigation-list__link'>
								Контакти
							</a>
						</li>
					</ul>
				</nav>
				<MobileNavigation />
			</div>
		</header>
	)
}
