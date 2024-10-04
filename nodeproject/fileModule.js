const fs = require('fs').promises; // fs.promises to use asynchronous file operations

class FileHandler {
    // Method to read a file asynchronously
    async readFile(filePath) {
        try {
            const data = await fs.readFile(filePath, 'utf8'); //Read the content of file
            return data;
        } catch (err) {
            throw new Error(`Error reading file: ${err.message}`);
        }
    }

    // Method to write data to a file asynchronously
   async writeFile(filePath, data) {
        try {
            await fs.writeFile(filePath, data, 'utf8'); //Write the content on file
            return 'File written successfully';
        } catch (err) {
            throw new Error(`Error writing to file: ${err.message}`);
        }
    }
    /*

    // Method to write data line by line asynchronously
    async writeFileLineByLine(filePath, lines) {
    try {
      for (const line of lines) {
        await fs.appendFile(filePath, line + '\n', 'utf8');
      }
      return 'Content written successfully';
    } catch (err) {
      throw new Error(`Error writing to file: ${err.message}`);
    }
  }
*/
}

// Export the class as a module
module.exports = FileHandler;
