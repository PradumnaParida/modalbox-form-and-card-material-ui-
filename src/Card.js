import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import image1 from "./image/ilya-mashkov-_qxbJUr9RqI-unsplash.jpg";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    width: 500,
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

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            Burgers are the ideal dish: The price/quality ratio is wonderful,
            the fat content is easy to control, and they cook quickly and
            easily. They can be made from a variety of meats and spices. They
            can be kept in the freezer in convenient packages. ... In our house,
            we consider burgers an almost-perfect meal.
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={image1}
        title="Delicious Burger"
      />
    </Card>
  );
}
