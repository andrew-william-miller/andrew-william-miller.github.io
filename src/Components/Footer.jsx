const Footer = () => {
    let date = new Date();
    return (
        <footer>
            <p>&copy; Andrew William Miller's Portfolio {date.getFullYear()}</p>
        </footer>
    );
}

export default Footer;