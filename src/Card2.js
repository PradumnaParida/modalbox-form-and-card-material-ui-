import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import image1 from "./image/jennifer-schmidt-zOlQ7lF-3vs-unsplash.jpg";
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

export default function RecipeReviewCard2() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            Mixed vegetables contain several carotenoids: alpha-carotene,
            beta-carotene, lutein and zeaxanthin. Alpha- and beta-carotene are
            converted into the form of vitamin A that is essential for vision.
            Lutein and zeaxanthin function as antioxidants.
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={image1}
        title="Mixed vegetables"
      />
    </Card>
  );
}
