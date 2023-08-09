// this component is responsible for rendering 1 object from the projectData key found within projectOverview.json
import React, { useState, useEffect } from 'react';
import { getKeyFromSrc, splitNameExtension } from '../Utility/helperFunctions';
// import gifTest from '../assets/images/screenshots/maoriPlacenamesAnsweringQuestion.gif'

const ProjectOverview = ({header, description, screenshots, captions}) => {
    // console.log(`Project Overview Data - header: ${header} description: ${description} screenshots: ${screenshots} captions: ${captions}`);
    const [loadedScreenshots, setLoadedSccreenshots] = useState([]);

    // Dynamically load the Qualification Images
    useEffect(() => {
        const loadImage = async (imageName) => {
            try {
            // I had to be more explicit with the file extension or I get disallowed mime type errors.
            // by splitting the name and stored extension as 2 separate variables that seems to be explicit whilst maintaining the advantage of being dynamic 
              let nameExtension = splitNameExtension(imageName);
              const imageSrc = await import(`../assets/images/screenshots/${nameExtension.name}${nameExtension.extension}`);
              return  imageSrc.default;
            } catch (error) {
              console.error(`Error loading individual image: ${imageName}`);
              return null;
            }
          };

        if (screenshots) {
            Promise.all(screenshots.map(loadImage))
                .then(loadedImages => {
                    setLoadedSccreenshots(loadedImages.filter(imageSrc => imageSrc !== null));
                })
                .catch(error => {
                    console.error('Error loading images:', error);
                });
        }
    }, [screenshots]);

    return (
        <>
            {/* <img src={gifTest} /> */}
            {loadedScreenshots &&
                <div className="screenshotContainer">
                    <p>These qualifications were gained to complement my primary qualifications and further strengthen my skills.</p>
                    {loadedScreenshots.map(imageSrc => (
                        <img className="projectScreenshot" key={getKeyFromSrc(imageSrc)} src={imageSrc} />
                    ))}
                </div>
            }
        </>
    );
}

export default ProjectOverview;