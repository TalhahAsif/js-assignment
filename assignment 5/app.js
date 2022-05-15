///////////////////assignment 31 -- 34/////////////////////

// que 1

// var now = new Date();

// document.write(now)

// que 2

// var monthNames = ["january","february","march","april","may","june","july","augest","september","october","november","decmeber"]
// 
// var now = new Date();
// var month = now.getMonth();
// var mo = monthNames[month];
// var firstLetter = mo.slice(0, 1).toUpperCase();
// var reWords = mo.slice(1);
// var fullWord = firstLetter + reWords
// 
// document.write("Current month: "+fullWord);

// que 3

// var daysNames = ["sun", "mon", "Tue", "wed", "thurs", "fri", "sat"]
// 
// var now = new Date().getDay();
// var day = daysNames[now]
// var firstLetter = day.slice(0, 1).toUpperCase()
// var reWords = day.slice(1)
// var full = firstLetter + reWords
// 
// document.write("Today is "+full)

// que 4

// var now = new Date().getDay();
// 
// if(now == 0 || 6){
// document.write("Its fun day")
// }else{
// document.write("Working day")    
// }

// que 5

// var now = new Date().getDate();
// if(now < 16){
// document.write("First fifteen days of the month")
// }else{
// document.write("last days of the month")
// }

// que 6

// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);
// 
//  
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

// que 7

// var now = new Date().getHours();
 
// if (now > 12) {
    // document.write("its PM")
// }else{
    // document.write("its AM")
// }


// que 8

// var date = new Date("December 31 2020")

// document.write(date)

// que 9

// var today = new Date();
// var firstRamzan = new Date("june 18 2015");
// var msToday = today.getTime()
// var msRamazan = firstRamzan.getTime()
// var msdifference = msToday - msRamazan
// var days = msdifference / (1000 * 60 * 60 * 24)
// 
// document.write(Math.ceil(days)+" days has been passed since 1st Ramzan 2015")

// que 10

// var today = new Date();
// var refdate = new Date("december 5 2015")
// var msToday = today.getTime()
// var msref = refdate.getTime()
// var diff = msToday - msref
// var second = diff / (1000)
// 
// document.write("refrence date: "+refdate+"<br>")
// document.write(Math.ceil(second)+" seconds had passed since beggining of 2015")

// que 11

// var now = new Date();
// 
// document.write("current date: "+now +"<br>")
/////////////////////remaining///////////////////





///////////////////assignment 35 -- 38/////////////////////
          //            FUNCTION

// que 1

// function time(){
    // var now = new Date()
    // document.write(now)
// }
// time();

// que 2

// var firstName = prompt("Enter first Name")
// var lastName = prompt("Enter last Name")
// 
// function foo(){
    // var firstnameletter1 = firstName.slice(0, 1).toUpperCase()
    // var lastnameletter1 = lastName.slice(0, 1).toUpperCase()
    // var firstNameOL = firstName.slice(1).toLowerCase()
    // var lastNameOL = lastName.slice(1).toLowerCase()
    // var fullfirstname = firstnameletter1 + firstNameOL
    // var fulllastname = lastnameletter1 + lastNameOL
// 
    // document.write("Hello "+ fullfirstname +" "+ fulllastname)
// }
// foo()

// que 3

// function sum(num1, num2){
    // var num = +prompt("Enter num1 ") + +prompt("Enter num2" )
    // return num
// }
// 
// document.write(sum())


// que 4

// -----------------------

// que 5
