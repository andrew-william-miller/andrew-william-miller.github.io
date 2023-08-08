import React, { useState, useEffect } from 'react';
import ProjectOverview from './ProjectOverview';

const getKeyFromSrc = (imageSrc) => {
    // extracts the fileName from a src by looking at the index of the last /, incrementing by 1 to move past it, then replacing the .jpg extension with nothing.
    return imageSrc.substring(imageSrc[0].lastIndexOf("/")+1).replace('.jpg', '');
}

const Overview = ({ qualificationImages, projectData }) => {
    /* ReactJS and React Native are not very good at dynamically loading images, you can't just specify a src using data from a passed in array to the component,
    have to perform additional steps using states, asyncronous code and promises. */

    const [loadedScreenshots, setLoadedSccreenshots] = useState({});
    const [loadedQualificationImages, setLoadedQualificationImages] = useState([]);

    // Dynamically load the Qualification Images
    useEffect(() => {
        const loadImage = async (imageName) => {
            try {
              const imageModule = await import(`../assets/images/qualifications/linkedInLearning/${imageName}.jpg`);
              return imageModule.default;
            } catch (error) {
              console.error(`Error loading image: ${imageName}`);
              return null;
            }
          };

          if (qualificationImages) {
            Promise.all(qualificationImages.map(loadImage))
              .then(loadedImages => {
                setLoadedQualificationImages(loadedImages.filter(imageSrc => imageSrc !== null));
              })
              .catch(error => {
                console.error('Error loading images:', error);
              });
          }
          // console.log("output: ", loadedQualificationImages);
        }, [qualificationImages]);

        // Dynamically load the project screenshots
        useEffect(() => {
          // const loadImage = async (imageName) => {
          //     try {
          //       // the screenshots could be in various file formats, so will include the file extension in the json data for screenshots.
          //       const imageModule = await import(`../assets/images/qualifications/linkedInLearning/${imageName}`);
          //       return imageModule.default;
          //     } catch (error) {
          //       console.error(`Error loading image: ${imageName}`);
          //       return null;
          //     }
          //   };
  
          //   if (projectData) {
          //     projectData.map(data => {
          //       if(data.screenshots.length > 0){
          //         Promise.all(data.map(loadImage))
          //         .then(loadedImages => {
          //           setLoadedSccreenshots(loadedImages.filter(imageSrc => imageSrc !== null));
          //         })
          //         .catch(error => {
          //           console.error('Error loading images:', error);
          //         });
          //       }
          //     })
          //   }
          }, [loadedScreenshots]);


    return (
        <main className="overviewContainer">
            <h1>Test</h1>
            {projectData &&
            <div className="projectOverviewWrap">
              {projectData.map(data => (
                /* render each of the projects here, passing in 1 block of project data */
                <ProjectOverview />
              ))}
            </div>
            }
            {loadedQualificationImages &&
                <div className="qualificationsContainer">
                    <h1>Qualifications</h1>
                    <p>These qualifications were gained to complement my primary qualifications and further strengthen my skills.</p>
                    {loadedQualificationImages.map(imageSrc => (
                            <img key={getKeyFromSrc(imageSrc)} src={imageSrc} />
                    ))}
                </div>
            }
        </main>
    );
}

export default Overview;