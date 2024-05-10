# NC News App

Welcome to NC News! This project covers the Frontend part of the Northcoders course and interacts with the NC News API created in the Backend section of the Northcoders course. The backend for this project can be found [here](https://github.com/DevTomUK/backend-project).

## Live App

Access the live app [here](https://ncnewsheeley.netlify.app/).  
*Please note that the initial content may take up to a minute to load due to the live SQL database being hosted on a free tier of ElephantSQL.*

## Overview

NC News Front End is a React.js application that provides users with access to news articles fetched from a backend server. The project was developed to demonstrate both Backend and Frontend skills.

### Backend Fundamentals:

- Setting up SQL databases
- Seeding test and development databases
- Creating a REST API server using Express with a Model View Controller (MVC) structure
- Using Node Postgres
- Using Jest and Supertest for testing
- Middleware implementation
- Creating complex queries
- Advanced error handling techniques

### Frontend Technologies:

- React
- Component Creation
- State management best practices
- App planning and design using component trees and wireframes
- Data fetching with Axios
- Utilisation of React hooks such as useState, useEffect, useParams, and useSearchParams
- Implementing React context
- Optimistic rendering for improved user experience
- Styling
- Accessibility
- Hosting considerations

## Built Using

- React.js for the frontend
- Express for the backend
- ElephantSQL for hosting the SQL database
- Render for hosting the Back-End
- Netlify for hosting the Front-End

## REST API Data

The app accesses example news data from the REST API. However, it can be modified to integrate real-time articles, enabling logged-in users to comment and vote on individual articles.

## Usage

- **Home Page**: Provides access to all other sections via the Navbar.
- **Articles**: Displays a list of all articles in the database. Users can sort articles by "Date", "Comments", and "Votes", and order them in "Ascending" or "Descending" order.
- **Topics**: Lists all available topics. Selecting a topic redirects the user to an "Articles by Topic" page, where articles are filtered based on the selected topic.  

When users navigate to a specific article, they are able to add votes, and post/delete comments. A hard-coded username is provided as an example of this.

## Design

The frontend design is responsive, so that the content is styled depending on the device used to view the app.

## Minimum Requirements (to run locally)

- Node: v20.11.1

## Local Setup

Follow these steps to run the project locally:

1. In a terminal window, create a new directory:  
```mkdir nc-news```

2. Navigate to the new directory:  
```cd nc-news```

3. Clone the repo:  
```git clone https://github.com/DevTomUK/nc-news-frontend.git```  
*(Alternatively, you can fork the repo and clone your own repo-url)*

4. Navigate to the project:  
```cd nc-news-frontend```

5. Install dependencies:  
```npm install```
