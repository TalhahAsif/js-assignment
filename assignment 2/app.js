///////////Assignment # 13-15//////////////

// 1 que 

// var students = []
// students[0]= "talha"
// students[1]= "faraz"
// students[2]= "anees"
// students[3]= "yasir"
// console.log(students)

// 2 que

// var students = new Array ()

// students[0]= "talha"
// students[1]= "faraz"
// students[2]= "anees"
// students[3]= "yasir"

// console.log(students)

// 3 que

// var strings = ["karachi", "lahore" , "hyderabad"]
// console.log (strings)

// 4 que

// var number = [10 , 20 , 30 , 40 ]
// console.log (number)

// 5 que

// var boolean = [true , false] 
// console.log (boolean)

// 6 que

// var mixed = [01 , "talha", 20, true, "wajahat"]
// console.log(mixed)

// 7 que

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"]
// document.write("<h2>Qualification</h2>")
//  
// for(i=0;i<=qualifications.length;i++){
// document.write(qualifications[i] + "<br>")
// }


// 8 que

// var totalNum = 500
// var studentName = ["Talha", "Ali", "Haris"]
// // var ObNums =[320, 230, 480]

// var percentageTalha = ObNums[0] / totalNum * 100
// var percentageAli = ObNums[1] / totalNum * 100
// // var percentageHaris = ObNums[2] / totalNum * 100

// // var percentages = [percentageTalha , percentageAli , percentageHaris]

// document.write("Score of Talha is " + ObNums[0] + " and Percentage is " + percentages[0] + "% <br>" )
// // document.write("Score of Ali is " + ObNums[1] + " and Percentage is " + percentages[1] + "% <br>" )
// document.write("Score of Haris is " + ObNums[2] + " and Percentage is " + percentages[2] + "% <br>" )

// 9 que

// document.write("<h3>Old Colors </h3> ")
// var colors = [" Red ", " Blue ", " Orange ", " Black  "]
// document.write(colors)
// 

// A

// document.write("<h3>After adding Colors in start</h3> ")
// var usercolor = prompt("Enter the color which you want to add in the start")
// colors.unshift(usercolor)
// document.write(colors)

// B 

// document.write("<h3>After adding Colors in end</h3> ")
// var usercolor = prompt("Enter the color which you want to add in the end")
// colors.push(usercolor)
// document.write(colors)

// C

// document.write("<h3>After adding Colors in start</h3> ")
// colors.unshift(" yellow "," gray ")
// 
// document.write(colors)

// D

// document.write("<h3>After removing Colors in start</h3> ")
// colors.shift()
// document.write(colors)

// E

// document.write("<h3>After removing Colors in end</h3> ")
// colors.pop()
// document.write(colors)

// F 

// document.write("<h3>After adding Colors </h3> ")
// var usercolor = prompt("enter the color which you want to add")
// var position = +prompt("At which number do you want to add??")
// colors.splice( --position , 0 ,usercolor)
// document.write(colors)

// G 

// document.write("<h3>After removing Colors </h3> ")
// var index = +prompt("From which number do you want to remove??")
// var lenght = +prompt("How many number do you want to remove??")
// colors.splice( --index , lenght)
// document.write(colors)


// 10 que

// var studentscore = [320 , 230 , 480 , 120]
// document.write("<h3>Scores of Students : "+ studentscore +"</h3>")

// studentscore.sort((a,b)=>a-b) 
// document.write(studentscore)

// 11 que

// var cities = ["karachi","lahore","quetta","islamabad","peshawar"]
// document.write("<h2>cities list </h2> " + cities )
// var copy = cities.slice(1,4)
// document.write("<h2> Selected cities list </h2> " + copy )

// 12 que

// var arr = ["This","is","my","cat"];
// document.write("<h2>Array : </h2> " + arr)
// var join = arr.join(" ")
// document.write("<h2>Strings : </h2> " + join)

// 13 que

// ------------------

// 14 que 

// ------------------

// 15 que 

// var phoneManufacturers = ["Apple","Samsung", "Motorola", "Nokia", "Sony & Haier"]
// document.write("<h3>Select </h3>" +phoneManufacturers[0] +"<br>" + phoneManufacturers[1] +"<br>" +phoneManufacturers[2] +"<br>"+phoneManufacturers[3] +"<br>"+phoneManufacturers[4] +"<br>"+phoneManufacturers[5] +"<br>" )


/////////////Assignment # 17-20//////////////

// 1 que 

// var arr =[[""]]

// 2 que 

// var arr = [ [0,1,2,3] , [1,0,1,2] , [2,1,0,1] ] 

// 3 que

// for(var i = 1 ; i <= 10 ; i++){
//     document.write("<h2>"+i+"</h2>")
// }

// 4 que

// var num = +prompt("Enter the number for Multiplication")
// var multiplyBy = +prompt("enter the lenght ") 
// for(var i =  1 ; i <= multiplyBy ; i++){
//     var mult = num * i 
//     document.write(num +"x"+ i +"="+ mult+"<br>")
// }

// 5 que

// var fruits = ["apple","banana","mango","orange","strawberry"]

// for(var i = 0 ; i <= fruits.length ; i++){
// document.write("<h2>"+fruits[i]+"</h2>")

// }

// for(var i = 0 ; i <= fruits.length ; i++){
// document.write("<h2> Element at index "+ i +" is "+fruits[i]+" </h2>")

// }

// 6 que

// A 

// for(var i = 1 ; i <= 15 ; i++){
//     document.write("<p>"+i+"</p>")

// }

// B

//  for(var i = 15 ; i >= 1  ; i--){
//     document.write("<p>"+i+"</p>")

// }

// C 

// for(var i = 0 ; i <= 20 ;  i = i + 2){
// document.write("<p>"+i+"</p>")

// }

// D 

// for(var i = 1 ; i <= 20 ;  i = i + 2){
//     document.write("<p>"+i+"</p>")

// }

// E 

// for(var i = 2 ; i <= 20 ;  i = i + 2){
//     document.write("<p>"+i+"k"+"</p>")
// }


// 7 que

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("which item would you want to find")
// var ismatch = false
// 
// for (i = 0; i <= A.length; i++) {
    // if (userInput == A[i]) {
            // document.write(A[i]+" is available at index "+ i + " in our bakery")
            // ismatch = true
    // }
// }
// 
// if(ismatch == false){
    // document.write( userInput +" is not available")
// }
// 


// 8 que

// var a = [24, 53, 78,  91, 12]
// document.write("Array items: "+ a+"<br>")
// var bigger = 0

// for(var i=0;i<=a.length;i++){
//     if (a[i] > bigger){
//         bigger = a[i]
//     }
// }

// document.write("the bigger num is: "+bigger)


// 9 que 

// var a = [24, 53, 78,  91, 12]
// document.write("Array items: "+ a+"<br>")
// var smaller = 10000

// for(var i=0;i<=a.length;i++){
//     if (a[i] < smaller){
//         smaller = a[i]
//     }
// }

// document.write("the smaller num is: "+ smaller )


// 10 que 

// for(var i = 0; i <= 100; i = i + 5){
//     document.write(" "+i)

// }