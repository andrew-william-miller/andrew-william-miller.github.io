import htmlIcon from '../assets/images/icons/technologies/html5.svg'
import cssIcon from '../assets/images/icons/technologies/css.svg'
import jsIcon from '../assets/images/icons/technologies/javascript.svg'
import reactIcon from '../assets/images/icons/technologies/react.svg'

/* Keys must match the values from the json data */
const iconDictionary = {
    html: htmlIcon,
    css: cssIcon,
    javascript: jsIcon,
    react: reactIcon
}

const SkillsBar = ({ primarySkill, technologies }) => {
    return (
        <div className="skillsBar">
            <h1 className="skillsHeader">{primarySkill}</h1>
            <div className="technologyWrap">
                {technologies.map(technology => (
                    <div className="hexagonOuter" key={technology}>
                        <div className="hexagonInner">
                            <img className="skillIcon" title={`${technology} was used in my ${primarySkill} projects.`} src={iconDictionary[technology]} alt={`${technology} icon`} />
                        </div>
                    </div>
                ))}
            </div>
            <a>See More...</a>
        </div>
    );
}

export default SkillsBar;
