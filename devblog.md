# Project Development Blog

## Purpose

- The purpose of this file is to document the process, lessons learned, and concepts explored while creating GamePlan. I want a reference for the future to go over difficult concepts I tackled so I either won't forget or show my growth over time.

## Blog

- 5/26/2022: Took me a while to get back in the loop of HTML outline and CSS basics. Good refresh. Easier to use a template to model then trying to do everything from inside your mind. Completed some basic custom logos for the page. Completed the header but still need to add style. Transition and colors were easy to do on the page. I added another feature I want to see, a background that changes on scroll. Still need to make nav bar at top sticky for user.

- 5/27/2022: Fixed an annoying problem I had that was keeping my button from smooth scrolling, solution was I had a class id in my javascript (.) instead of the (#) for the button id that I created. As soon as I made this tiny fix the button worked. Learned to use the `<span>` element which allows for more customization inside a `<p>` for instance (change the font, size, etc of whats between `<span>`). Completed the tabbed content feature to homepage. Important to name classes correctly, core function with javascript was adding and removing classes to display and hide the tabbed content when clicking on a button.

- 5/31/2022: Look to section 7 for how to blur background when modal window pops up. Having trouble figuring out how to click anywhere outside the modal window to close the modal. Might have something to do with the layout of each element. Z-index in CSS is a useful tool that helps you set the stack of boxes on top of one another, useful for making backgrounds on modals. The higher the number on the z-index the higher on the stack it is.

- 6/1/2022: Made JS more dry by utilizing functions. Made the `setTimeout()` execute with two different lines of code instead of a two `setTimeout()` methods. Corrected issue with modal window where background would blur and modal closes with button OR clicking outside the modal. I corrected this problem by adding `const overlay = document.querySelector('.overlay');` I must not have had this created so it could be selected to turn off the hidden css attribute on the `classList()`. Completed task to close out modal when the esc key is pressed, within that code I made sure that the escape key will only close the modal when the modal is present (see the if statement with && logical operator). Learned about using `overflow: hidden;` in CSS to lock the scroll bar when the modal pops up. I did this by creating a new class in css called `.stopscrolling {overflow: hidden;}` and added it to the body element by using `const body = document.querySelector('body');` you don't have to have a class with `.querySelector()` to target an element on the document, if you just put in the element name it will return the first element on the html page. I need to add a feature where the modal will pop up in front of you no matter where you are on the page.

- 6/2/2022: opacity is on a scale from 0 to 1. 0 is invisible 1 is completely solid. Difference betweeen .getElementById and .querySelector is that .getElementById can only target IDs while .querySelector can target classes and elements that don't have a class. Using intersection observer API for my scroll feature is complicated, will need to review tha tin the future. The bind() method is helpful to utilize 'this' in callback functions that otherwise couldn't. I used the bind() method in the top nav bar's opacity fading feature.

- 6/2/2022: added defer to script tag and moved it into the `<head>` element.
