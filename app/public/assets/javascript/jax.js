  $.ajax({
  url: '/friends',
  method: 'GET'
  }).then(function(data){
  
  console.log(data);
  // creating current user data
  var userInput = data[data.length-1];
  console.log(userInput);
  console.log(userInput.score1);
  userScore= [];
  userScore.push(userInput.score1,userInput.score2,userInput.score3,userInput.score4,userInput.score5,userInput.score6,userInput.score7,userInput.score8,userInput.score9,userInput.score10,);
  //current user score
  console.log(userScore);

 

  // Examine all existing friends in the list
  
  var totalDiff =[];

  for (var i = 0; i < data.length-1; i++) {

  console.log(data[i]); 

    

    //gettng the each score difference b/n each freind list and current user
    var diff1= Math.abs(data[i].score1-userScore[0]);
    console.log(diff1);
    var diff2= Math.abs(data[i].score2-userScore[1]);
    console.log(diff2);
    var diff3= Math.abs(data[i].score3-userScore[2]);
    console.log(diff3);
    var diff4= Math.abs(data[i].score4-userScore[3]);
    console.log(diff4);
    var diff5= Math.abs(data[i].score5-userScore[4]);
    console.log(diff5);
    var diff6= Math.abs(data[i].score5-userScore[5]);
    var diff7= Math.abs(data[i].score5-userScore[6]);
    var diff8= Math.abs(data[i].score5-userScore[7]);
    var diff9= Math.abs(data[i].score5-userScore[8]);
    var diff10= Math.abs(data[i].score5-userScore[9]);
    // getting the sum of the differences of each friend
    var diference = diff1 + diff2 + diff3 + diff4 + diff5 + diff6 + diff7 + diff8 + diff9 + diff10;
    console.log(diference);
    
   // putting the total difference of a player in array.
   totalDiff.push(diference);
   console.log(totalDiff);
   console.log(totalDiff[1]);
   }
   
   // placing the least difference in "0 index" of the array
   var value = totalDiff[0];
   console.log(value);
   var index = 0;

   function lowestIndex(array){
   for (var i = 1; i < array.length; i++) {

          if (array[i] < value) {

            value = array[i];
            console.log(value); 
            index = i;          

          }

      }
      return index;    

     };
     // the value of  the least difference 
    var bestMach = data[lowestIndex(totalDiff)];
     console.log(bestMach);
    
      var p=$('<p>');
      p.text(bestMach.name);
      $("#friendName").append(p);
      var fImage =$('<img>');
      fImage.attr('src',bestMach.photo).attr('width', "250").attr('height', "200");
      $("#friendImage").append(fImage);    
     
  });
      


    
  



  
 
