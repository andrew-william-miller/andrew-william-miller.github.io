import skillsetData from '../Data/technologies.json'
import SkillsBar from './SkillsBar';

const Skills = () => {
    // console.log(skillsetData);
    return (
        <main className="skillsWrap">
            {skillsetData.map(skillset => (
                <SkillsBar key={skillset.primaryTechnology} primarySkill={skillset.primaryTechnology} technologies={skillset.technologies} />
            ))}
        </main>
    );
}

export default Skills;