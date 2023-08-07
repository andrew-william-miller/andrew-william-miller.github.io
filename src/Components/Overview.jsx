// import testImage from '../assets/images/qualifications/linkedInLearning/reactJSEssentialTraining.jpg'
import React, { useState, useEffect } from 'react';

const getKeyFromSrc = (imageSrc) => {
    // extracts the fileName from a src by looking at the index of the last /, incrementing by 1 to move past it, then replacing the .jpg extension with nothing.
    return imageSrc.substring(imageSrc[0].lastIndexOf("/")+1).replace('.jpg', '');
}

const Overview = ({ qualificationImages, projectData }) => {
    /* ReactJS and React Native are not very good at dynamically loading images, you can't just specify a src using data from a passed in array to the component,
    have to perform additional steps using states, asyncronous code and promises. */

    const [images, setImages] = useState([]);

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
                setImages(loadedImages.filter(imageSrc => imageSrc !== null));
              })
              .catch(error => {
                console.error('Error loading images:', error);
              });
          }
          console.log("output: ", images);
        }, [qualificationImages]);

    return (
        <main className="overviewContainer">
            <h1>Test</h1>
            {images &&
                <div className="qualificationsContainer">
                    <h1>Qualifications</h1>
                    <p>These qualifications were gained to complement my primary qualifications and further strengthen my skills.</p>
                    {images.map(imageSrc => (
                            <img key={getKeyFromSrc(imageSrc)} src={imageSrc} />
                    ))}
                </div>
            }
        </main>
    );
}

export default Overview;