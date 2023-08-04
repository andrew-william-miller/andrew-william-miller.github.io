import skillsetData from '../Data/technologies.json'
import SkillsBar from './SkillsBar';

const Skills = () => {
    // console.log(skillsetData);
    return (
        <div className="skillsWrap">
            {skillsetData.map(skillset => (
                <SkillsBar key={skillset.primaryTechnology} primarySkill={skillset.primaryTechnology} technologies={skillset.technologies} />
            ))}
        </div>
    );
}

export default Skills;