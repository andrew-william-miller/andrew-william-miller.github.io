import kirbyImage from '../assets/images/kirbyPlaceholder.png';
const Header = () => {

    return (
        <header>
            <img className="profilePic" src={kirbyImage} />
            <div className="headerTitleWrap">
                <h1>Andrew William Miller</h1>
                <h2>Software Developer</h2>
            </div>
            <a className="email" href="mailto:andrew.william.miller7@gmail.com">Contact: Email</a>
        </header>
    );
}

export default Header;
