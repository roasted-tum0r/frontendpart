const img = document.getElementsByClassName("img")
function openFile() {
    document.getElementById('upload').click();
  }

  document.getElementById('upload').addEventListener('change', function() {
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('preview').src = e.target.result;
    };
    reader.readAsDataURL(this.files[0]);
  });
  function handleFileSelect(event) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".txt, .pdf, .doc"; // Specify the file types allowed
    
    input.onchange = function (e) {
      const file = e.target.files[0];
      console.log("Selected file:", file.name);
      // Do something with the selected file
    };
    
    input.click();
  }