import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
    const title = 'The Jungle House'
	return (
		<div className='lmj-banner'>
			<img src={logo} alt='logo-The Jungle House' className='lmj-logo' />
			<h1 className='lmj-title'>{title}</h1>
		</div>
	)
}



export default Banner;
