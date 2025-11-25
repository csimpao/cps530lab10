import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Problem 2: Frameworks</h1>

      <h2>1. Installation + Setup</h2>
      <p>Since I have a Mac, React is already installed</p> 
      <p>I had to create a React app in order to do this lab: npx create-react-app 530lab10</p>
      <p>Then, I used Vercel as my host, in order to run the app with React</p>
      <p>Finally I added a GitHub repository with all the files in order to commit these changes</p>

      <h2>2. Building the Page with React + Running it</h2>
      <p>In order to actually build the webpage into this for lab, I had to delete everything within the div element</p>
      <p>I also had to delete everything in the App.css file, except for the .App attribute</p>
      <p>In the App.css I put as much styling as a I can in order to make the webpage more appealing</p>
      <p>Once I finished my changes, I committed and pushed my changes onto the GitHub repository using git, and it takes a few minutes for the page to update</p>

      <h2>3. Difficulties</h2>
      <p>Apparently I had to make a copy of my GitHub repository in Vercel using a new name, which it made harder for git to push the changes to the coprrect folder</p>
      <p>So, I had to manually go to the repository clone and manually change the code, but it still displays the webpage</p>
    </div>
  );
}

export default App;
