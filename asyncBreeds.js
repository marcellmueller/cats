const { doesNotMatch } = require("assert");
const fs = require("fs");
const breedDetails = require("./syncBreeds");

const breedDetailsFromFile = function (breed, functionToRunWhenThingsAreDone) {
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      functionToRunWhenThingsAreDone(data);
    } else {
      functionToRunWhenThingsAreDone(data);
    }
  });
};

module.exports = breedDetailsFromFile;
