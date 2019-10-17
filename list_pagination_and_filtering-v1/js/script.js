/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const studentList = document.querySelector(".student-list").children
const maxItems = 10



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage (list, page) {
   const length = list.length
   const end = Math.min(length, page * maxItems)
   const start = page * maxItems - maxItems

   for (let i = 0; i < length; i ++) {
      if (i < start || i >= end) {
         list[i].style.display = "none"
      } else {
         list[i].style.display = ""
      }
   }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks () {
   const length = studentList.length
   const numOfPages = Math.round(length / maxItems) + 1

   //determine where to set page list
   const parent = document.querySelector(".student-list").parentNode 
   let div = document.createElement('div')
   div.className = "pagination"
   let ul = document.createElement('ul')
   
   //create each list item
   for (let i = 1; i <= numOfPages; i++) {
      //create one li for each page
      let newListItem = document.createElement('li')
      let newAnchor = document.createElement('a')
      newAnchor.href = "#"
      newAnchor.textContent = i
      let page = newListItem.appendChild(newAnchor)
      ul.appendChild(newListItem)
      
      //add listeners to each button
      newAnchor.addEventListener('click', () => {
         const allAnchor = document.querySelectorAll('a')
         for (let ct in allAnchor) {
            allAnchor[ct].className = ""
         }
         newAnchor.className = "active"
         showPage(studentList, newAnchor.textContent)
         //need to remove active class from other anchor tags
     })
   }
   div.appendChild(ul)   
   parent.insertBefore(div, undefined)
}

appendPageLinks()



// Remember to delete the comments that came with this file, and replace them with your own code comments.