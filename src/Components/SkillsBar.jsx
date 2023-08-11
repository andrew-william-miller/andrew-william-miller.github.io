import { Link } from 'react-router-dom'
import htmlIcon from '../assets/images/icons/technologies/html5.svg'
import cssIcon from '../assets/images/icons/technologies/css.svg'
import jsIcon from '../assets/images/icons/technologies/javascript.svg'
import reactIcon from '../assets/images/icons/technologies/react.svg'
import sqlIcon from '../assets/images/icons/technologies/sql.svg'
import bootstrapIcon from '../assets/images/icons/technologies/bootstrap.svg'
import rubyIcon from '../assets/images/icons/technologies/ruby.svg'
import cSharpIcon from '../assets/images/icons/technologies/c-sharp.svg'
import sqliteIcon from '../assets/images/icons/technologies/sqlite.svg'
import apiIcon from '../assets/images/icons/technologies/api.svg'
import jsonIcon from '../assets/images/icons/technologies/json.svg'
import pythonIcon from '../assets/images/icons/technologies/python.svg'
import xmlIcon from '../assets/images/icons/technologies/xml.svg'
import javaIcon from '../assets/images/icons/technologies/java.svg'
import phpIcon from '../assets/images/icons/technologies/php.svg'
import unityIcon from '../assets/images/icons/technologies/unity.svg'
import luaIcon from '../assets/images/icons/technologies/lua.svg'

/* Keys must match the values from the json data */
const iconDictionary = {
    HTML: htmlIcon,
    CSS: cssIcon,
    JavaScript: jsIcon,
    React: reactIcon,
    SQL: sqlIcon,
    Bootstrap: bootstrapIcon,
    Ruby: rubyIcon,
    "C#": cSharpIcon,
    SQLite: sqliteIcon,
    API: apiIcon,
    JSON: jsonIcon,
    Python: pythonIcon,
    XML: xmlIcon,
    Java: javaIcon,
    PHP: phpIcon,
    Unity: unityIcon,
    Lua: luaIcon
}

const linkDictionary = {
    "ReactJS": "/reactjs",
    "ASP.NET": "/aspnet",
    "React Native": "",
    "PHP": "",
    "Unity": "",
    "Python": "",
    "Java": "",
    "Lua": ""
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
            <Link to={linkDictionary[primarySkill]}>See More...</Link>
        </div>
    );
}

export default SkillsBar;
