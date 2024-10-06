var fs = require('fs');
// fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created.

fs.appendFile('newFile.txt', 'B.Tech CSE-AI', function (err) {
    if (err) throw err;
    console.log('File Saved Successfully!');
});


// fs.open() method takes a "flag" as the second argument,
// if the flag is "w" for "writing", the specified file is opened for writing.
// If the file does not exist, an empty file is created

// fs.open('newFileO.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('File Saved Successfully!');
// });

// fs.writeFile() method replaces the specified file and content if it exists.
// If the file does not exist, a new file, containing the specified content, will be created.
// fs.writeFile('newFileO.txt', 'Shoolini University', function (err) {
//     if (err) throw err;
//     console.log('File Saved Successfully!');
// });

