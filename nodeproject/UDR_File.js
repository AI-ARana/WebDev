// Update File
var fs = require('fs');
// fs.appendFile() method appends the specified content at the end of the specified file

fs.appendFile('newFile.txt', ' AI is the Emerging Domain.', function (err) {
    if (err) throw err;
    console.log('File Updated!');
});

// fs.writeFile() method replaces the specified file and content

// fs.writeFile('newFile.txt', 'Yogananda School of AI, Computers and Data Sciences', function (err) {
// if (err) throw err;
// console.log('File Replaced!');
// });


// Delete File
// fs.unlink() method deletes the specified file
//fs.unlink('newFile.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// Rename File
// fs.rename() method renames the specified file
// fs.rename('newFileO.txt', 'newFileOR.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });