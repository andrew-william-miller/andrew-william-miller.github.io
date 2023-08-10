// this component is responsible for rendering 1 object from the projectData key found within projectOverview.json
import React, { useState, useEffect } from 'react';
import { getKeyFromSrc } from '../Utility/helperFunctions';

// the screenshots are now keyvalue pairs, where the keys are the image names and the values are their associated captions.
const ProjectOverview = ({ header, description, screenshotsJpgData, screenshotsGifData }) => {
    console.log("Screenshot JPG Data in prop state: ", screenshotsJpgData);
    console.log("Screenshot Gif Data in prop state: ", screenshotsGifData);
    // console.log(`Project Overview Data - header: ${header} description: ${description} screenshots: ${screenshots} captions: ${captions}`);
    const [loadedJpgScreenshots, setLoadedJpgSccreenshots] = useState([]);
    const [loadedGifScreenshots, setLoadedGifSccreenshots] = useState([]);

    // Dynamically load the project screenshot Jpg Images
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

        if (screenshotsJpgData) {
            Promise.all(Object.keys(screenshotsJpgData).map(loadImage))
                .then(loadedImages => {
                    setLoadedJpgSccreenshots(loadedImages.filter(imageSrc => imageSrc !== null));
                })
                .catch(error => {
                    console.error('Error loading images:', error);
                });
        }
    }, [screenshotsJpgData]);

    // useEffect(() => {
    //     console.log(`here is what the loaded jpg screenshots look like:`, loadedJpgScreenshots);
    // }, [loadedJpgScreenshots]);

    useEffect(() => {
        console.log(`here is what the loaded gif screenshots look like:`, loadedGifScreenshots);
    }, [loadedGifScreenshots]);

    // Dynamically load the screenshot Gif Images
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

        if (screenshotsGifData) {
            Promise.all(Object.keys(screenshotsGifData).map(loadImage))
                .then(loadedImages => {
                    setLoadedGifSccreenshots(loadedImages.filter(imageSrc => imageSrc !== null));
                })
                .catch(error => {
                    console.error('Error loading images:', error);
                });
        }
    }, [screenshotsGifData]);

    return (
        <div className="projectWrap">
            <h2>{header}</h2>
            <p>{description}</p>
            {loadedJpgScreenshots.length + loadedGifScreenshots.length > 0 &&
                <div className="screenshotOuterContainer">
                    {/* below p tag is just copy paste, TODO: implement descriptions and captions */}

                    {loadedJpgScreenshots &&
                        <div className="screenshotJpgContainer">
                            {loadedJpgScreenshots.map(imageSrc => (
                                <figure key={getKeyFromSrc(imageSrc)}>
                                    <img className="projectScreenshot" src={imageSrc} />
                                    <figcaption>{screenshotsJpgData[getKeyFromSrc(imageSrc)]}</figcaption>
                                </figure>
                            ))}
                        </div>
                    }
                    {loadedGifScreenshots &&
                        <div className="screenshotGifContainer">
                            {loadedGifScreenshots.map(imageSrc => (
                                <figure key={getKeyFromSrc(imageSrc)}>
                                    <img className="projectScreenshot" src={imageSrc} />
                                    <figcaption>{screenshotsGifData[getKeyFromSrc(imageSrc)]}</figcaption>
                                </figure>

                            ))}
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export default ProjectOverview;