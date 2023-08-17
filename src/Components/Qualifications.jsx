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
import cssIcon from '../assets/images/icons/technologies/css.svg'
import jsIcon from '../assets/images/icons/technologies/javascript.svg'
import reactIcon from '../assets/images/icons/technologies/reactBlack.svg'
import sqlIcon from '../assets/images/icons/technologies/sqlBlack.svg'
import bootstrapIcon from '../assets/images/icons/technologies/bootstrap.svg'
import cSharpIcon from '../assets/images/icons/technologies/c-sharp.svg'
import javaIcon from '../assets/images/icons/technologies/java.svg'
import phpIcon from '../assets/images/icons/technologies/php.svg'
import gitIcon from '../assets/images/icons/technologies/git.svg'
import angularIcon from '../assets/images/icons/technologies/angular.svg'
import Swal from 'sweetalert2'

const Qualifications = () => {

    // title = show Technology elaborate
    // text = show Technology brief or consider leaving out? or switch these around (text show elaborate, title show brief?)
    // or put something else cos the qualification shows it.

    // don't forget to add icon as a key so you can use the icon. 
    const linkedInLearningData =
    {
        "C#": {
            "icon": cSharpIcon,
            "certificateData": [
                { "image": beginnersGuideToCSharp, "name": "Beginners Guide To C Sharp" },
                { "image": learningCSharp, "name": "Learning C Sharp" },
            ]
        },
        "SQL": {
            "icon": sqlIcon,
            "certificateData": [
                { "image": microsoftSQLServer2019EssentialTraining, "name": "Microsoft SQL Server 2019 Essential Training" }
            ]
        },
        "React Native": {
            "icon": reactIcon,
            "certificateData": [
                { "image": learningReactNative, "name": "Learning React Native" },
                { "image": reactNativeEssentialTraining, "name": "React Native Essential Training" }
            ]
        },
        "React JS": {
            "icon": reactIcon,
            "certificateData": [
                { "image": reactJSEssentialTraining, "name": "React JS Essential Training" }
            ]
        },
        "CSS": {
            "icon": cssIcon,
            "certificateData": [
                { "image": cSSForProgrammers, "name": "CSS For Programmers" },
                { "image": cSSEssentialTraining, "name": "CSS Essential Training" },
                { "image": cSSEnhancingInterfacesWithAnimation, "name": "CSS Enhancing Interfaces With Animation" },
                { "image": cSSTransformsAndTransitions, "name": "CSS Transforms And Transitions" }
            ]
        },
        "Bootstrap": {
            "icon": bootstrapIcon,
            "certificateData": [
                { "image": bootstrap4EssentialTraining, "name": "Bootstrap 4 Essential Training" }
            ]
        },
        "JavaScript": {
            "icon": jsIcon,
            "certificateData": [
                { "image": javaScriptEssentialTraining, "name": "JavaScript Essential Training" },
                { "image": javaScriptEssentialTraining2017, "name": "JavaScript Essential Training 2017" },
                { "image": javaScriptClasses2018, "name": "JavaScript Classes 2018" }
            ]
        },
        "Git": {
            "icon": gitIcon,
            "certificateData": [
                { "image": gitHubEssentialTraining, "name": "GitHub Essential Training" },
                { "image": learningGitAndGitHub2015, "name": "Learning Git And GitHub 2015" }
            ]
        },
        "Angular": {
            "icon": angularIcon,
            "certificateData": [
                { "image": angularEssentialTraining, "name": "Angular Essential Training" },
                { "image": learningAngular, "name": "Learning Angular" }
            ]
        },
        "PHP": {
            "icon": phpIcon,
            "certificateData": [
                { "image": bootstrap4EssentialTraining, "name": "Bootstrap 4 Essential Training" }
            ]
        },
        "Java": {
            "icon": javaIcon,
            "certificateData": [
                { "image": javaEssentialTrainingForStudents, "name": "Java Essential Training For Students" },
                { "image": learningJava2018, "name": "Learning Java 2018" },
                { "image": javaTestingWithJUnit2016, "name": "Java Testing With JUnit 2016" },
                { "image": nailYourJavaInterview2018, "name": "Nail Your Java Interview 2018" }
            ]
        }
    }

    console.log("LinkedInLearningData", linkedInLearningData);
    return (
        <main className="qualificationsContainer">
            <div className="academicContainer">
                <h1>Academic Achievements</h1>
                <ul>
                    <li>Bachelor of Information and Communication Technologies</li>
                    <li>Diploma of Information and Communication Technologies</li>
                    <li>Diploma in Web Development</li>
                    <li>Diploma in Software Development</li>
                </ul>
            </div>
            <div className="professionalContainer">
                <h1>Professional Development</h1>
                <h2>LinkedIn Learning Certifications</h2>
                {
                    Object.keys(linkedInLearningData).map(technology => (
                        <div className="linkedInTechnologyWrap" key={technology}>
                            <div className="linkedInTechnologyHeader">
                                <h3>{technology}</h3>
                                <img src={linkedInLearningData[technology].icon} alt={`Icon of ${technology} technology`}/>
                            </div>
                            {linkedInLearningData[technology].certificateData.map(certificate => (
                                <div className="certificateWrap" key={certificate.name}>
                                    <p>{certificate.name}</p>
                                    <a onClick={() => {
                                        Swal.fire({
                                            html: '<div class="loading-message">Image may take a few seconds to load...</div>',
                                            width: 900,
                                            imageUrl: certificate.image,
                                            imageAlt: `LinkedIn Learning Qualification. Topic: ${certificate.name}`,
                                            confirmButtonText: "Close"
                                        })
                                    }} >See Qualification</a>
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
            <div className="Specialized Training">

            </div>
        </main>
    );
}

export default Qualifications;