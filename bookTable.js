document.addEventListener("DOMContentLoaded", function() {
    // Define an array of objects representing the book inventory
    var bookInventory = [
      {
      
        BookName: "1984",
        AuthorName: "George Orwell",
        YearPublication: 1949,
        Genre: "Dystopian",
        Availability: "Available",
        NumOfCopies: 5
      },
      {
        bookName: "To Kill a Mockingbird",
        authorName: "Harper Lee",
        yearPublication: 1960,
        genre: "Fiction",
        availability: "Available",
        numOfCopies: 3
      },
      {
        bookName: "The Great Gatsby",
        authorName: "F. Scott Fitzgerald",
        yearPublication: 1925,
        genre: "Classic",
        availability: "Not Available",
        numOfCopies: 0
      },
      {
        bookName: "Pride and Prejudice",
        authorName: "Jane Austen",
        yearPublication: 1813,
        genre: "Romance",
        availability: "Available",
        numOfCopies: 2
      },
      {
        bookName: "The Hobbit",
        authorName: "J.R.R. Tolkien",
        yearPublication: 1937,
        genre: "Fantasy",
        availability: "Available",
        numOfCopies: 4
      }
    ];
  
  
    // Function to generate the table HTML
    function generateTable(data) {
      var table = document.createElement("table");
      var headers = Object.keys(data[0]); 
      
      var headerRow = document.createElement("tr");
      headers.forEach(function(header) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(header));
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);
    
      data.forEach(function(item) {
        var row = document.createElement("tr");
        Object.entries(item).forEach(function([key, value]) {
          var cell = document.createElement("td");
          if (key === "BookCover") {
            // Create an <img> element for the book cover image
            var img = document.createElement("img");
            img.src = "images/Books/1984.jpeg";
            img.alt = "Book Cover";
            
            cell.appendChild(img);
          } else {
            cell.appendChild(document.createTextNode(value));
          }
          row.appendChild(cell);
        });
        table.appendChild(row);
      });
    
      return table;
    }
  
    // Function to filter the table based on book name
    function filterTable() {
      var searchInput = document.getElementById("query");
      var filterValue = searchInput.value.toUpperCase();
      var rows = table.getElementsByTagName("tr");
  
      for (var i = 1; i < rows.length; i++) {
        var bookNameCell = rows[i].getElementsByTagName("td")[0];
        var bookName = bookNameCell.textContent || bookNameCell.innerText;
  
        if (bookName.toUpperCase().indexOf(filterValue) > -1) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  
    // Get the container element where the table will be displayed
    var container = document.getElementById("table-container");
    // Generate the table and append it to the container
    var table = generateTable(bookInventory);
    container.appendChild(table);
  
    // Attach event listener to search input
    var searchInput = document.getElementById("query");
    searchInput.addEventListener("input", filterTable);
  });