import angularEssentialTraining from '../assets/images/qualifications/linkedInLearning/angularEssentialTraining.jpg'
import beginnersGuideToCSharp from '../assets/images/qualifications/linkedInLearning/beginnersGuideToCSharp.jpg'
import bootstrap4EssentialTraining from '../assets/images/qualifications/linkedInLearning/bootstrap4EssentialTraining.jpg'
import cSSEnhancingInterfacesWithAnimation from '../assets/images/qualifications/linkedInLearning/cSSEnhancingInterfacesWithAnimation.jpg'
import cSSEssentialTraining from '../assets/images/qualifications/linkedInLearning/cSSEssentialTraining.jpg'
import cSSForProgrammers from '../assets/images/qualifications/linkedInLearning/cSSForProgrammers.jpg'
import cSSTransformsAndTransitions from '../assets/images/qualifications/linkedInLearning/cSSTransformsAndTransitions.jpg'
import gitHubEssentialTraining from '../assets/images/qualifications/linkedInLearning/gitHubEssentialTraining.jpg'
import javaEssentialTrainingForStudents from '../assets/images/qualifications/linkedInLearning/javaEssentialTrainingForStudents.jpg'
import javaScriptClasses2018 from '../assets/images/qualifications/linkedInLearning/javaScriptClasses2018.jpg'
import javaScriptEssentialTraining from '../assets/images/qualifications/linkedInLearning/javaScriptEssentialTraining.jpg'
import javaScriptEssentialTraining2017 from '../assets/images/qualifications/linkedInLearning/javaScriptEssentialTraining2017.jpg'
import javaTestingWithJUnit2016 from '../assets/images/qualifications/linkedInLearning/javaTestingWithJUnit2016.jpg'
import learningAngular from '../assets/images/qualifications/linkedInLearning/learningAngular.jpg'
import learningCSharp from '../assets/images/qualifications/linkedInLearning/learningCSharp.jpg'
import learningGitAndGitHub2015 from '../assets/images/qualifications/linkedInLearning/learningGitAndGitHub2015.jpg'
import learningJava2018 from '../assets/images/qualifications/linkedInLearning/learningJava2018.jpg'
import learningPHP from '../assets/images/qualifications/linkedInLearning/learningPHP.jpg'
import learningReactNative from '../assets/images/qualifications/linkedInLearning/learningReactNative.jpg'
import microsoftSQLServer2019EssentialTraining from '../assets/images/qualifications/linkedInLearning/microsoftSQLServer2019EssentialTraining.jpg'
import nailYourJavaInterview2018 from '../assets/images/qualifications/linkedInLearning/nailYourJavaInterview2018.jpg'
import reactJSEssentialTraining from '../assets/images/qualifications/linkedInLearning/reactJSEssentialTraining.jpg'
import reactNativeEssentialTraining from '../assets/images/qualifications/linkedInLearning/reactNativeEssentialTraining.jpg'
import Swal from 'sweetalert2'

const Qualifications = () => {

    // title = show Technology elaborate
    // text = show Technology brief or consider leaving out? or switch these around (text show elaborate, title show brief?)
    // or put something else cos the qualification shows it.
    const linkedInLearningData = [
        { "image": beginnersGuideToCSharp, "name": "Beginners Guide To C Sharp", "technology": "C#" },
        { "image": learningCSharp, "name": "Learning C Sharp", "technology": "C#" },
        { "image": microsoftSQLServer2019EssentialTraining, "name": "Microsoft SQL Server 2019 Essential Training", "technology": "T-SQL" },
        { "image": learningReactNative, "name": "Learning React Native", "technology": "React Native" },
        { "image": reactNativeEssentialTraining, "name": "React Native Essential Training", "technology": "React Native" },
        { "image": reactJSEssentialTraining, "name": "React JS Essential Training", "technology": "ReactJS" },
        { "image": cSSForProgrammers, "name": "CSS For Programmers", "technology": "CSS" },
        { "image": cSSEssentialTraining, "name": "CSS Essential Training", "technology": "CSS" },
        { "image": cSSEnhancingInterfacesWithAnimation, "name": "CSS Enhancing Interfaces With Animation", "technology": "CSS" },
        { "image": cSSTransformsAndTransitions, "name": "CSS Transforms And Transitions", "technology": "CSS" },
        { "image": bootstrap4EssentialTraining, "name": "Bootstrap 4 Essential Training", "technology": "Bootstrap" },
        { "image": javaScriptEssentialTraining, "name": "JavaScript Essential Training", "technology": "JavaScript" },
        { "image": javaScriptEssentialTraining2017, "name": "JavaScript Essential Training 2017", "technology": "JavaScript" },
        { "image": javaScriptClasses2018, "name": "JavaScript Classes 2018", "technology": "JavaScript" },
        { "image": learningGitAndGitHub2015, "name": "Learning Git And GitHub 2015", "technology": "Git" },
        { "image": gitHubEssentialTraining, "name": "GitHub Essential Training", "technology": "Git" },
        { "image": angularEssentialTraining, "name": "Angular Essential Training", "technology": "Angular" },
        { "image": learningAngular, "name": "Learning Angular", "technology": "Angular" },
        { "image": learningPHP, "name": "Learning PHP", "technology": "PHP" },
        { "image": javaEssentialTrainingForStudents, "name": "Java Essential Training For Students", "technology": "Java" },
        { "image": learningJava2018, "name": "Learning Java 2018", "technology": "Java" },
        { "image": javaTestingWithJUnit2016, "name": "Java Testing With JUnit 2016", "technology": "Java" },
        { "image": nailYourJavaInterview2018, "name": "Nail Your Java Interview 2018", "technology": "Java" }
    ]

    return (
        <main className="qualificationsContainer">
            <div className="academicContainer">
                <h1>Academic Achievements</h1>
            </div>
            <div className="professionalContainer">
                <h1>Professional Development</h1>
                <h2>LinkedIn Learning Certifications</h2>
                <table className="certificationTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Technology</th>
                            <th>Certification</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            linkedInLearningData.map(linkedInLearningData => (
                                <tr key={linkedInLearningData.name}>
                                    <td>{linkedInLearningData.name}</td>
                                    <td>{linkedInLearningData.technology}</td>
                                    <td className="swalQualificationBtn" onClick={() => {
                                        Swal.fire({
                                            html: '<div class="loading-message">Image may take a few seconds to load...</div>',
                                            width: 1250,
                                            imageUrl: linkedInLearningData.image,
                                            imageAlt: `LinkedIn Learning Qualification. Topic: ${linkedInLearningData.name}`,
                                            confirmButtonText: "Close"
                                        })
                                    }} >See Qualification</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="Specialized Training">

            </div>
        </main>
    );
}

export default Qualifications;