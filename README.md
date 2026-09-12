# PazhamCut™

PazhamCut is a playful browser-based banana distribution experiment. It treats cutting a banana like a serious optimization problem, then turns the result into an interactive nine-level decision game.

## Features

- Enter a banana length, number of people, and desired piece size.
- Adjust the overall hunger level with a slider.
- Watch a staged optimization and precision-cutting animation.
- Calculate the number of pieces, people served, and leftover banana.
- Make decisions about fairness, shortages, leftovers, and the final verdict.
- Add names for the people taking part in the experiment.
- Restart the experiment and try a different strategy.

## Game Flow

1. Banana Lab
2. Banana Optimization
3. Result Dashboard
4. Banana Justice
5. Banana Crisis
6. Amma Override
7. Leftover Lab
8. Final Analysis
9. Final Banana Verdict

## How It Works

The initial cutting calculation uses:

```text
possible pieces = floor(banana length / desired piece size)
leftover        = banana length % desired piece size
people served   = min(possible pieces, number of people)
```

Later levels use the stored experiment data to generate hunger readings, identify the hungriest person, handle shortages, and calculate a final score based on the choices made.

## Run Locally

No build step or package installation is required.

1. Clone or download this project.
2. Open `index.html` directly in a browser.

For a local development server, run one of these commands from the project folder:

```bash
# Python
python -m http.server 8000

# Node.js, if you have npx available
npx serve .
```

Then open the URL shown by the server, usually `http://localhost:8000`.

## Project Structure

```text
.
├── index.html   # Page markup and game sections
├── style.css    # Layout, responsive styling, and animations
├── script.js    # Game state, calculations, and interactions
└── README.md    # Project documentation
```

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

PazhamCut is a front-end-only project and does not send experiment data to a server.
