export const getKeyFromSrc = (imageSrc) => {
    // extracts the fileName from a src by looking at the index of the last /, incrementing by 1 to move past it, then replacing the .jpg extension with nothing.
    return imageSrc.substring(imageSrc[0].lastIndexOf("/")+1).replace('.jpg', '');
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
    // console.log(`HELPER FUNCTION data: ${imageFileName}`)
    let fileExtension = imageFileName.substring(imageFileName.lastIndexOf("."));
    let imageName = imageFileName.substring(0, imageFileName.lastIndexOf("."));
    // console.log(`HELPER FUNCTION imageName: "${imageName}"`)

    return {
        "name" : imageName,
        "extension" : fileExtension
    };
}