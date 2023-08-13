const images = [
    "CME1styearAudisankaraStudentsList_page-0001.jpg",
    "CME1styearAudisankaraStudentsList_page-0002.jpg",
    "CME1styearAudisankaraStudentsList_page-0003.jpg",
    "CME1styearAudisankaraStudentsList_page-0004.jpg",
    "CME1styearAudisankaraStudentsList_page-0005.jpg",
    "CME1styearAudisankaraStudentsList_page-0006.jpg",
    "CME1styearAudisankaraStudentsList_page-0007.jpg",
    "CME1styearAudisankaraStudentsList_page-0008.jpg",
    "CME1styearAudisankaraStudentsList_page-0009.jpg",
    "CME1styearAudisankaraStudentsList_page-0010.jpg",
    "CME1styearAudisankaraStudentsList_page-0011.jpg",

    // Add more image URLs as needed
  ];

  let currentIndex = 0;

  function showImage() {
    const imgElement = document.getElementById("slideshow");
    imgElement.src = images[currentIndex];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  }
function request(){
var input=document.getElementById('input');
input.innerHTML='<input type="password" id="Pin" placeholder="Enter Pin"><input type="submit" value="Submit" onclick="dowloading()">';
}
function dowloading(){
var Pin = document.getElementById('Pin').value;
   if(Pin=='2361'){
     alert("Pin Is Correct");
  input.innerHTML='<button style=""><a href="CME1styearAudisankaraStudentsList.pdf" download="CME1styearAudisankaraStudentsList.pdf" style="text-decoration:none;">Click Here To Dowload</a></button>';
   }
   else{
     alert("incorrect Pin");
   }
}
  // Show the first image when the page loads
  showImage();
