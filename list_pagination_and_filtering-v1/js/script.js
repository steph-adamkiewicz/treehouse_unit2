/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const studentList = document.querySelector(".student-list").children
const maxItems = 10

/* 
   description: shows maxItems elements from the list of students based on what page is selected
   parameters:
      list- HTML list of students
      page - what page is selected
*/

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

/* 
   description: displays an appropriate number of list items on the bottom of the page based on the maxItems
*/

function appendPageLinks () {
   const length = studentList.length
   const numOfPages = Math.round(length / maxItems) + 1

   //determine where to set page list
   const parent = document.querySelector(".student-list").parentNode 
   let div = document.createElement('div')
   div.className = "pagination"
   let ul = document.createElement('ul')
   
   for (let i = 1; i <= numOfPages; i++) {
      //create one li for each page
      let newListItem = document.createElement('li')
      let newAnchor = document.createElement('a')
      newAnchor.href = "#"
      newAnchor.textContent = i
      //add the "active" class on the first page on initial load
      if (i === 1) {
         newAnchor.className = "active"
      }
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
     })
   }
   div.appendChild(ul)   
   parent.insertBefore(div, undefined)
}

showPage(studentList, 1)
appendPageLinks()