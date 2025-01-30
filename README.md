# PickMatch

## Overview
PickMatch is a web-based application that allows users to upload images of two different teams (e.g., guys and girls), then randomly match them. The application provides both a manual matching feature and an automatic matching feature that iteratively pairs images and displays them in a modal before moving them to a partners section.

## Features
- Drag & drop or click-to-upload image functionality for both teams.
- Random pairing of uploaded images.
- Modal display of matched pairs for 5 seconds before moving them to a partners section.
- Automatic mode that iterates through available images and pairs them until all are matched.
- Responsive design using HTML, CSS, and JavaScript.

## Technologies Used
- **HTML**: Structure of the application.
- **CSS**: Styling for different sections, including modals and buttons.
- **JavaScript**: Functionality for uploading images, matching logic, and UI interactions.

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/lovers-random-match.git
   cd lovers-random-match
   ```
2. Open `index.html` in your browser.

## Usage
1. **Upload Images**:
   - Drag and drop images into the respective team sections OR click the section to upload manually.
2. **Match Manually**:
   - Click the "Match" button to randomly select and display a pair.
3. **Match Automatically**:
   - Click the "Automatic" button to iteratively match images until all pairs are made.
4. **View Results**:
   - Matched images appear in a modal before being moved to the partners section.

## File Structure
```
├── index.html        # Main HTML file
├── styles.css        # Main styling
├── modal.css         # Modal-specific styles
├── wheels.css        # Additional styling (if applicable)
├── script.js         # Main JavaScript file for logic
└── README.md         # Project documentation
```

## Future Enhancements
- Implement a database to store matched pairs.
- Add a reset feature to clear all matches.
- Improve UI/UX with animations and transitions.

## License
This project is licensed under the MIT License.

## Author
Developed by [Your Name].

For any contributions or issues, please feel free to submit a pull request or open an issue on GitHub.

