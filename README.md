# CS465-fullstack
CS-465 Full Stack Development with MEAN

Michael Barbuzano
CS-465
12/12/2023
Module Eight: Journal

•	Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

Express was used in this project to simplify routing, middleware handling, and interaction with the database.  HTML is the standard markup language for creating the structure of web pages, it was used for defining the content and layout of each page.  JavaScript is a versatile programming language used for both frontend programming language used for both frontend and backend development, JavaScript was used to enhance user interactivity and communicate with APIs.  SPAs load a single HTML page and dynamically update content as the user interacts with the application.

•	Why did the backend use a NoSQL MongoDB database?

MongoDB is a document-based NoSQL database, allowing flexible schema designs, this flexibility allows for changes in data structure without requiring modifications to the entire database.  MongoDB is commonly used for full stack applications like this, as it is efficient for high volume of read and write operations, as well as when the data structure is subject to frequent changes.

•	How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JavaScript is a programming language used for creating dynamic content on the client side, JSON is a data interchange format that facilitates the exchange of data between the frontend and the backend.  JSON is often used in conjunction with APIs and other communication mechanisms to seamlessly connect the different components of a web application.

•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

In the most recent update to this full stack web application, I refactored code to create navigation bar and login components to allow for login functionality that will also interact with other core features.  I added to the edit and add trip buttons so that they only appear if the user is logged in, the updateTrip and createTrip functions also check for successful login to assure secure coding practices.  The app.component.html also now contains <app-navbar></app-navbar> to utilize reusable navbar code and maintain clean and efficient code. 

•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Methods and enpoints are fundamental components of API testing, ensuring that the API functions correctly and securely.  Security in a full stack application involves authentication, authorization encryption, input validation, and proactive monitoring to address potential security threats and vulnerabilities.

•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has taught me the skills necessary to develop a full stack application using the MEAN stack.  Before this course I did not have any experience with Node, Express, or Angular and now I can say that I feel very comfortable working with them and plan to utilize what I have learned in this course to create many more web applications to assemble a professional portfolio. I understand that the software development field can be very competitive, so I plan to practice many skills such as web development to become qualified enough to earn an entry an internship or possibly an entry level position.

