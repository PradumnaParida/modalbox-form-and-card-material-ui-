import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import image1 from "./image/rebeca-g-sendroiu-EtANwY5TXJY-unsplash.jpg";

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

export default function RecipeReviewCard3() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.Very tasty and delicious food to have in
            lunch or dinner . Try it and enjoy this food with your love's one.
          </Typography>
        </CardContent>
      </div>
      <CardMedia className={classes.cover} image={image1} title="paella" />
    </Card>
  );
}
