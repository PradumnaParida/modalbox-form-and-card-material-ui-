import React from "react";
import "./App.css";
import RegistrationForm from "./components";
import CustomizedDialogs from "./components/dialog";

import "bootstrap/dist/css/bootstrap.min.css";
import RecipeReviewCard from "./Card";
import RecipeReviewCard2 from "./Card2";
import RecipeReviewCard3 from "./Card3";
import RecipeReviewCard4 from "./Card4";

function App() {
  return (
    <div className="App">
      <br></br>
      <h1>Register Here</h1>
      <br></br>
      <CustomizedDialogs title="Register Here">
        <RegistrationForm />
      </CustomizedDialogs>
      <br></br>
      <h1>Delicious & Yummy Food</h1>
      <br></br>
      <br></br>
      <RecipeReviewCard />
      <br></br>
      <br></br>
      <RecipeReviewCard2 /> <br></br>
      <br></br>
      <RecipeReviewCard3 /> <br></br>
      <br></br>
      <RecipeReviewCard4 />
    </div>
  );
}

export default App;
