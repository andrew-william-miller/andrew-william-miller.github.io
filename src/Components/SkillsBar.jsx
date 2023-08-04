const SkillsBar = ({primarySkill, technologies}) => {


    return (
        <div className="skillsBar">
            <h3 className="skillsHeader">{primarySkill}</h3>
            <div className="technologyWrap">
                <div className="hexagonOuter">
                    <div className="hexagonInner">
                        <img className="skillIcon" src="" />
                    </div>
                </div>
            </div>
        </div>
);
}

export default SkillsBar;
