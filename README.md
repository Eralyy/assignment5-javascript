# Assignment 5: JavaScript Basics

Name: Yerali Karkinbayev

Group: IT-2501

Website: https://eralyy.github.io/assignment5-javascript/

Repository: https://github.com/Eralyy/assignment5-javascript

Open "index.html" in a browser. The project uses HTML, CSS and JavaScript.

## Part 1: Profile Object, Data Types and Arithmetic

### Tasks 1–2: Personal Info Object and Calculations

"script.js" contains the const object userProfile. It stores a name (string), birth year (number), isDeveloper (boolean) and hobbies (array). The starting values are examples.

Age is the current year minus birthYear. The other result is the number of hobbies. Both results appear on the page and in the browser console.

![Profile and calculations](screenshots/part1.png)

## Part 2: Form Input and Event Responses

### Task 3: HTML Form

The form has Username, Birth Year and a Create / Update Profile button.

![Profile form](screenshots/task3.png)

### Task 4: Event Listener

Submit updates userProfile and the displayed results without reloading. Birth year is converted to a number. The profile background becomes light grey to show a style change.

![Updated profile](screenshots/task4.png)

## Part 3: DOM List Manipulation

### Task 5: Creating and Removing Elements

Add Item creates a new li in the hobbies list. Remove Item deletes the last li. The hobbies array and count are updated too. Empty input is ignored, and removing from an empty list does not cause an error.

After adding an item:

![Added hobby](screenshots/task5-add.png)

After removing the last item:

![Removed hobby](screenshots/task5-remove.png)

## Work Process

I made the HTML sections, added the profile object and calculations, then connected the form and list buttons. I checked profile updates, empty input, wrong birth years and an empty list. I also checked the page at 320px, 768px and 1280px. Reloading the page restores the starting values.
