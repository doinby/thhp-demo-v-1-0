import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function HomeLayout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}
