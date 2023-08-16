import { Link } from 'react-router-dom'

const Footer = () => {
    let date = new Date();
    return (
        <footer>
            <Link to="/qualifications">Qualifications</Link>
            <p>&copy; Andrew William Miller's Portfolio {date.getFullYear()}</p>
        </footer>
    );
}

export default Footer;