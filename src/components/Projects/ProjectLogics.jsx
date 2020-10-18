import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


function ProjectLogics({ projects }) {

  let name, details, image, link

  if (projects) {
    name = projects.name
    details = projects.details
    image = projects.image
    link = projects.link
  }

  const classes = useStyles();


  
  return (
    <div>
      <div >
        <Card className={classes.root}>
          <CardActionArea onClick={()=>window.open(link)}  >
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile" 
            />
            <CardContent>
              <Typography  gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {details}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={() => window.open(link)} variant="outlined" size="small" color="primary">
              View more
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default ProjectLogics
