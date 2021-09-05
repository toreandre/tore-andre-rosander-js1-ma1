const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = { 
    
    complain: function() {
        console.log("Meow!");
    }
};

console.log(cat.complain);

// Question 2

var heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

var paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6

resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function catList(list) {

    for (i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

catList(cats);

// Question 8

function createCats(cats) {
    var html = "";
    
    for (i = 0; i < cats.length; i++) {

        var catAge = cats[i].age;

        html += "<div><h5>" + cats[i].name + "</h5></div>";
        
        if(catAge) {
            html += "<div><p>" + catAge + "</p></div>";
        } else {
            html += "<div><p>Age unknown</p></div>";
        }
    }
    
    return html;
}

createCats(cats);

document.querySelector(".cat-container").innerHTML = createCats(cats);