let curJob = " Veterinary Technition";

//get the size of the height and width
let heightSize = $(window).height();
let widthSize = $(window).width();

// div with need layout for buisness card
let mobileLayout =`
<div class="row">
  <!-- img of Emily -->
  <!-- lite infor about her  -->
  <div class="col-6">
    <picture>
      <img src="assets/photos/emily_rey.jpg" style="max-width:350px;">
    </picture>
  </div>
  <div class="col-6">
    <div class="row">
      <div class="col-12">
        <h4>Emily Capra: Resume</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
      <p>
        About Me:
        Hi, my name is Emily Capra. I am a veterinary assistant currently
        working option, my LVT(Lisenced Veterinary Technition).I have been in
        the veterinary field for over two years. Working with animals brings me great joy,
        knowing I am able to assist in keeping pets healthy, and nursing those that are sick.
        I have had these passions since I was a child and look forward in growing my knowledge and skills.
      </p>
      </div>
    </div>
    <div class="row">
        <div class="col-12">
          <h4>Education: </h4>
          <ul>
            <li>Penn Foster: AAS Veterinary Technician</li>
            <li>BYUI: BS General Studies <em>Graduated 2017</em></li>
            <li>Lone Star College: AAS Paralegal Studies <em>Graduated 2015</em></li>
          </ul>
    </div>
  </div>
</div>
`;
// function to check the size of screen at load up
function mobileText(){
  //screen will display rotation msg if vertical
  if(widthSize < 400){
    $("#mainBody").empty().append("Hello! please rotate the screen and reload to see business card. Thank you - Emily");
  }else
  if (heightSize < 800 || widthSize < 1000){
    //replaces website with buisness card
    $("#mainBody").empty().append(mobileLayout);
  }else{
    $("#currentJob").append(curJob);
  }
}


// Call mobile
$(document).ready(mobileText());
