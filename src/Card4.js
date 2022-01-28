import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import image1 from "./image/sebastian-coman-photography-CRoAeTh5S_I-unsplash.jpg";

const useStyles = makeStyles(() => ({
  root: {
    width: 500,
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    border: "1px solid black",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: 250,
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 250,
  },
}));

export default function RecipeReviewCard4() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            A non-vegetarian diet includes chicken, meat, eggs and fish. A
            non-vegetarian diet also has several health benefits because this
            type of food is rich in protein and vitamin B. Non-vegetarian food
            strengthens our muscles and helps them grow faster.
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={image1}
        title="Yummy chicken"
      />
    </Card>
  );
}
