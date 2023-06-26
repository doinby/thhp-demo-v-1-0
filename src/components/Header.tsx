import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<section className='flex justify-between'>
				<h1>Logo</h1>
				<nav className='[&>a]:p-3'>
					<Link to='/'>Link 1</Link>
					<Link to='/'>Link 2</Link>
					<Link to='/'>Link 3</Link>
					<Link to='/'>Link 4</Link>
					<Link to='/'>Link 5</Link>
				</nav>
			</section>
		</header>
	);
}
