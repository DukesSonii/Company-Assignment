Languages and Tools Used
JavaScript: The primary programming language used for server-side logic and client-side scripting.
Express.js: A web application framework for Node.js, used to set up the server and handle HTTP requests.
SQLite: A lightweight relational database management system, used to store logs of prime number generation operations.

Description
The project is a Prime Number Generator Server that makes it easier to find prime numbers that fall inside specified ranges. It serves as a backend service, providing endpoints via which customers can access historical operation logs and obtain prime numbers. The server uses a number of techniques to quickly calculate prime numbers and stores pertinent data in a SQLite database for further use. By contacting the endpoint from the backend and presenting it on the frontend, the saved data can also be presented in an HTML file.

Approach: 
To calculate prime numbers, the server uses a variety of algorithms or techniques. A conventional method of iterating through every integer in the range and figuring out if it's a prime number is used in one strategy, which is implemented in generatePrimes. The Sieve of Eratosthenes technique is used in generatePrimes2, another strategy that greatly increases efficiency for bigger ranges by eliminating multiples of every prime number found in the range. A streamlined version of trial division is used in a third strategy called TrialDivision, which determines if a given number may be divided by any odd number up to its square root. This approach is less optimized but serves as an alternative.

Optimization: 
The choice of algorithms directly impacts the performance of prime number generation. Strategies like the Sieve of Eratosthenes (implemented in generatePrimes2) offer significant optimization by eliminating redundant calculations, especially for larger ranges. 

Database: 
The logs of prime number generating activities are kept in a SQLite database. This contains data like timestamps, range start and end points, chosen strategies, calculation elapsed time, and the number of prime numbers produced. Through the usage of a database, the server keeps an ongoing log of previous activities, allowing users to examine historical data and monitor performance over time.

Accessibility: 
The capability for generating prime numbers can be accessed through the server's HTTP endpoints. Users can obtain logs of previous activities and request prime numbers within specified ranges using these APIs. By ensuring clear and consistent access to server resources, RESTful principles make it simple for clients to interact with the server and take advantage of its features.

Flexibility: 
The project's design encourages flexibility, making it simple to extend and customize. By giving the user a visual representation of the logs, the data saved in the database can also be dynamically presented in an HTML file.

Output:
Representation of Data stored in the database
![Screenshot 2024-05-26 215203](https://github.com/DukesSonii/Company-Assignment/assets/98602899/e13e1c29-fcaf-4662-909d-810255239f47)

Representation of data shown on frontend
![Screenshot 2024-05-26 215109](https://github.com/DukesSonii/Company-Assignment/assets/98602899/b5470c7e-0d85-4ce9-9433-a16ab3eeca08)
