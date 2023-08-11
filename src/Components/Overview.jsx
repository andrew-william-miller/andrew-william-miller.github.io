import React, { useState, useEffect } from 'react';
import ProjectOverview from './ProjectOverview';
import { getKeyFromSrc } from '../Utility/helperFunctions';


const Overview = ({ qualificationImages, projectData, primaryTechnology }) => {
  /* ReactJS and React Native are not very good at dynamically loading images, you can't just specify a src using data from a passed in array to the component,
  have to perform additional steps using states, asyncronous code and promises. */

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

  return (
    <main className="overviewContainer">
      {projectData &&
        <div className="projectOverviewWrap">
          <h1>{primaryTechnology} Projects</h1>
          {projectData.map(data => (
            /* render each of the projects here, passing in 1 block of project data */
            <ProjectOverview key={data.header} header={data.header} description={data.description} screenshotsJpgData={data.screenshotsJpgData} screenshotsGifData={data.screenshotsGifData} />
          ))}
        </div>
      }
      {loadedQualificationImages &&
        <div className="qualificationsContainer">
          <h1>Qualifications</h1>
          <p>These qualifications were gained to complement my primary qualifications and further strengthen my skills.</p>
          <div className="qualificationImageWrap">
            {loadedQualificationImages.map(imageSrc => (
              <div className="qualificationImageContainer">
                <img className="qualificationImage" key={getKeyFromSrc(imageSrc)} src={imageSrc}/>
              </div>
            ))}
          </div>

        </div>
      }
    </main>
  );
}

export default Overview;