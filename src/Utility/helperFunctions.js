// This approach means I should keep using camelCase for my image names (screenshots but everything else for consistency)
// If I need to change my image naming in the future, I'll have to rework this logic, to remove just the hyphen and numbers at end without interfering with original hyphens
// example of what the image name can become when deployed:  "/assets/maoriPlacenamesAnsweringQuestion-74576f25.gif" 
// alternatively, I could extract the keys from the original json and use those.
export const getKeyFromSrc = (imageSrc) => {
    // the build has a format of applying hyphen bunch of numbers then file extension at end of images, so have to add logic
    // to slice that off so I can get the original image names.
    let separator = imageSrc.lastIndexOf("-") !== -1 ? "-" : "."; // if a hyphen is not discovered, use the original 
    let fileExtension = imageSrc.substring(imageSrc.lastIndexOf(separator));
    // console.log(`The file extension sliced off looks like this: ${fileExtension}`)
    // extracts the fileName from a src by looking at the index of the last /, incrementing by 1 to move past it, then replacing the .jpg extension with nothing.
    return imageSrc.substring(imageSrc.lastIndexOf("/")+1).replace(fileExtension, '');
}

/* I originally attempted to use this function to be slightly more explicit with the file extension when dynamically loading images
which worked for local host, but appeared not to work with GitHub Pages, though after reworking my projectOverview json to be more explicit with jpgs and gifs, I found the exact same error,
turned out GitHub Pages was not loading the new logic properly yet, despite giving a different error. I debugged this thanks to the React Developer Tools Addon for Firefox.
Eventually the error disappeared after additional refreshes.
I think I prefer the old approach, though this new approach has some advantages. such as being more explicit with file types jpg vs gif. The disadvantages being that my ProjectOverview component
has 2 more parameters, and the projectOverview json has 2 more key value pairs within it's nested structure. */
// splits a filename with extension then returns them separately using key value pairs. 

// I don't need this function any more, but I like the logic.
export const splitNameExtension = (imageFileName) => {
    let fileExtension = imageFileName.substring(imageFileName.lastIndexOf("."));
    let imageName = imageFileName.substring(0, imageFileName.lastIndexOf("."));

    return {
        "name" : imageName,
        "extension" : fileExtension
    };
}