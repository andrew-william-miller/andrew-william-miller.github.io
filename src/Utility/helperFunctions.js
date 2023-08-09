export const getKeyFromSrc = (imageSrc) => {
    // extracts the fileName from a src by looking at the index of the last /, incrementing by 1 to move past it, then replacing the .jpg extension with nothing.
    return imageSrc.substring(imageSrc[0].lastIndexOf("/")+1).replace('.jpg', '');
}

// splits a filename with extension then returns them separately using key value pairs. 
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