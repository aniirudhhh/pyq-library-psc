# PyQ Library - Previous Year Question Papers Website

A modern, interactive website for accessing and filtering previous year question papers by year and subject. The website features smooth page transitions, responsive design, and an intuitive user interface.

## Features

- **Homepage**: Clean interface with search bar and filter options
- **Filter by Year**: Select a year (2021-2025) to view questions from that period
- **Filter by Subject**: Filter questions by Mathematics, Physics, Chemistry, Computer Science, and Biology
- **Search Function**: Find specific questions or keywords across all papers
- **Smooth Animations**: Page transitions and card animations for better UX
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Dark Mode**: Toggle between light and dark themes
- **Local Storage**: Saves user preferences for filters and theme
- **Accessibility**: ARIA labels and keyboard navigation support

## Tech Stack

- **Frontend**:
  - HTML5
  - CSS3 (Flexbox/Grid for layout)
  - JavaScript (Vanilla)
  - Google Fonts (Inter)
  - Custom SVG icons

- **Data Management**:
  - JSON file for question paper data

- **Optional Backend** (not included):
  - Node.js/Express for handling uploads and user management

## Project Structure

```
pyq-library/
│
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Extracted from inline styles
│
├── js/
│   ├── main.js         # Core functionality
│   ├── animations.js   # Animation utilities
│   └── accessibility.js # Accessibility enhancements
│
├── data/
│   └── question-papers.json # Question paper data
│
└── files/              # PDF files for download (placeholder)
```

## Setup Instructions

### Basic Setup (Frontend Only)

1. Clone the repository:
   ```bash
   git clone https://github.com/aniirudhhh/pyq-library-psc.git
   cd pyq-library
   ```

2. Extract the inline styles from `index.html` to `css/styles.css`.

3. Extract the JavaScript from `index.html` to the appropriate JS files.

4. Open `index.html` in a web browser or set up a simple local server:
   ```bash
   # If you have Python installed
   python -m http.server 8000
   
   # Or with Node.js
   npx serve
   ```

5. Access the website at `http://localhost:8000` or `http://localhost:3000`.

### Extended Setup (With Backend)

1. Follow steps 1-3 from the Basic Setup.

2. Install Node.js and npm if not already installed.

3. Create a basic Express server:
   ```bash
   npm init -y
   npm install express cors body-parser
   ```

4. Create `server.js`:
   ```javascript
   const express = require('express');
   const cors = require('cors');
   const bodyParser = require('body-parser');
   const path = require('path');
   const fs = require('fs');

   const app = express();
   const PORT = process.env.PORT || 3000;

   app.use(cors());
   app.use(bodyParser.json());
   app.use(express.static(path.join(__dirname, './')));

   // API endpoint to get question papers
   app.get('/api/papers', (req, res) => {
     const data = JSON.parse(fs.readFileSync('./data/question-papers.json', 'utf8'));
     res.json(data);
   });

   // Start server
   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
   ```

5. Run the server:
   ```bash
   node server.js
   ```

6. Access the website at `http://localhost:3000`.

## Customization

### Adding More Subjects

To add more subjects:

1. Update the subject dropdown in `index.html`:
   ```html
   <select id="subject-filter">
     <option value="">All Subjects</option>
     <option value="Mathematics">Mathematics</option>
     <!-- Add new subjects here -->
     <option value="English">English</option>
   </select>
   ```

2. Add question papers for the new subject in `data/question-papers.json`.

### Adding More Years

To add data for additional years:

1. Update the year dropdown in `index.html`.
2. Add question papers for the new years in `data/question-papers.json`.

### Changing Theme Colors

To modify the theme:

1. Update the CSS variables in the `:root` selector:
   ```css
   :root {
     --primary: #4f46e5; /* Main accent color */
     --primary-light: #6366f1;
     --secondary: #10b981;
     /* Other variables */
   }
   ```

## Future Enhancements

- **User Authentication**: Add login functionality for students and educators
- **Upload System**: Allow admins to upload new question papers
- **Notes and Solutions**: Add the ability to attach notes and solutions to questions
- **Discussion Forum**: Implement a Q&A section for each paper
- **Print Functionality**: Enable users to print selected question papers
- **Favorites**: Allow users to bookmark favorite papers
- **Progress Tracking**: Track which papers users have completed
- **Multiple Exam Boards**: Support for different educational boards and universities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Created by Claude, improve by me - 
