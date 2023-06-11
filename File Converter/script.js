function convert() {
    const fileInput = document.getElementById("csvFile");
    const file = fileInput.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const contents = e.target.result;
        const jsonData = csvToJson(contents);
        displayResult(JSON.stringify(jsonData, null, 2));
      };
      reader.readAsText(file);
    } else {
      displayResult("No file selected.");
    }
  }
  
  function csvToJson(csv) {
    const lines = csv.split("\n");
    const result = [];
  
    const headers = lines[0].split(",");
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentLine = lines[i].split(",");
  
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
      }
  
      result.push(obj);
    }
  
    return result;
  }
  
  function displayResult(result) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerText = result;
  }
  