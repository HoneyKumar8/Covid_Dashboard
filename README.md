📊 COVID-19 Dashboard (India)

A responsive React.js web application that displays COVID-19 statistics for India, including country-wide data, state-wise statistics, district-wise insights, and graphical visualizations of COVID trends.

This project fetches real-time data from public APIs and presents it in an easy-to-understand dashboard.

🚀 Live Demo

🔗 View Project:
https://honeykumar8.github.io/Covid_Dashboard/

📸 Preview

✨ Features
🧾 Country-Wide Statistics

Displays overall COVID-19 data for India:

Confirmed Cases

Active Cases

Recovered Cases

Deceased Cases

🔍 State Search

Users can search for states using a dynamic search bar.

Features include:

Instant filtering

State name and state code display

Click to navigate to state-specific dashboard

📋 State-Wise Data Table

Shows detailed COVID statistics for each state:

Confirmed

Active

Recovered

Deceased

Population

Sorting functionality:

Ascending order

Descending order

📍 State Details Page

Each state page displays:

State-specific statistics

Tested cases

Top districts based on selected metric

Users can view district data based on:

Confirmed

Active

Recovered

Deceased

📈 Graphical Data Visualization

The dashboard includes charts to visualize trends:

Bar chart for last 10 days COVID data

Line charts for:

Confirmed cases

Active cases

Recovered cases

Deceased cases

Tested cases

📱 Fully Responsive Design

The application is responsive and works across:

Desktop

Tablet

Mobile

Responsive behavior tested using Chrome Developer Tools.

🏗️ Tech Stack

Frontend

React.js

React Router DOM

Libraries

React Icons

Recharts (for charts)

Tools

JavaScript (ES6)

HTML5

CSS3

📂 Project Structure
src
│
├── components
│   ├── About
│   ├── Counter
│   ├── Footer
│   ├── Header
│   ├── Home
│   ├── Loader
│   ├── NotFound
│   └── StateDetails
│
├── statesList
│
├── App.js
├── App.css
├── index.js
└── setupTests.js
🔗 API Used

COVID-19 data is fetched from:

https://apis.ccbp.in/covid19-state-wise-data
https://apis.ccbp.in/covid19-timelines-data/{stateCode}
🧑‍💻 Installation

Clone the repository:

git clone https://github.com/HoneyKumar8/Covid_Dashboard.git

Navigate into the project:

cd Covid_Dashboard

Install dependencies:

npm install

Run the project:

npm startf
📦 Deployment

This project is deployed using GitHub Pages.

Deployment command: npm run deploy

This project helped me practice:

React component architecture,
React Router navigation,
API integration,
State management,
Conditional rendering,
Data visualization with charts,
Responsive UI design,
GitHub deployment

👨‍💻 Author : Shyam Kumar
   GitHub : https://github.com/HoneyKumar8

⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
