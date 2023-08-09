// this component is responsible for rendering 1 object from the projectData key found within projectOverview.json
import React, { useState, useEffect } from 'react';
import { getKeyFromSrc } from '../Utility/helperFunctions';

const ProjectOverview = ({ header, description, screenshotsJpg, captionsJpg, screenshotsGif, captionsGif }) => {
    // console.log(`Project Overview Data - header: ${header} description: ${description} screenshots: ${screenshots} captions: ${captions}`);
    const [loadedJpgScreenshots, setLoadedJpgSccreenshots] = useState([]);
    const [loadedGifScreenshots, setLoadedGifSccreenshots] = useState([]);

    // Dynamically load the Qualification Jpg Images
    useEffect(() => {
        const loadImage = async (imageName) => {
            try {
                const imageSrc = await import(`../assets/images/screenshots/${imageName}.jpg`);
                return imageSrc.default;
            } catch (error) {
                console.error(`Error loading individual image: ${imageName}`);
                return null;
            }
        };

        if (screenshotsJpg) {
            Promise.all(screenshotsJpg.map(loadImage))
                .then(loadedImages => {
                    setLoadedJpgSccreenshots(loadedImages.filter(imageSrc => imageSrc !== null));
                })
                .catch(error => {
                    console.error('Error loading images:', error);
                });
        }
    }, [screenshotsJpg]);

    // Dynamically load the Qualification Gif Images
    useEffect(() => {
        const loadImage = async (imageName) => {
            try {
                const imageSrc = await import(`../assets/images/screenshots/${imageName}.gif`);
                return imageSrc.default;
            } catch (error) {
                console.error(`Error loading individual image: ${imageName}`);
                return null;
            }
        };

        if (screenshotsGif) {
            Promise.all(screenshotsGif.map(loadImage))
                .then(loadedImages => {
                    setLoadedGifSccreenshots(loadedImages.filter(imageSrc => imageSrc !== null));
                })
                .catch(error => {
                    console.error('Error loading images:', error);
                });
        }
    }, [screenshotsGif]);

    return (
        <>
            {loadedJpgScreenshots.length + loadedGifScreenshots.length > 0 &&
                <div className="screenshotOuterContainer">
                    <p>These qualifications were gained to complement my primary qualifications and further strengthen my skills.</p>
                    {loadedJpgScreenshots &&
                        <div className="screenshotJpgContainer">
                            {loadedJpgScreenshots.map(imageSrc => (
                                <img className="projectScreenshot" key={getKeyFromSrc(imageSrc)} src={imageSrc} />
                            ))}
                        </div>
                    }
                    {loadedGifScreenshots &&
                        <div className="screenshotGifContainer">
                            {loadedGifScreenshots.map(imageSrc => (
                                <img className="projectScreenshot" key={getKeyFromSrc(imageSrc)} src={imageSrc} />
                            ))}
                        </div>
                    }
                </div>
            }
        </>
    );
}

export default ProjectOverview;