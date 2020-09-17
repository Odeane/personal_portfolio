import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './project.style.css'



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Projects({ projects }) {
  
  const classes = useStyles();

  let name, details, image, link;

  if (projects) {
    console.log(projects.projects.Bidspace.image)
    name = projects.projects.Bidspace.name
    details = projects.projects.Bidspace.details
    image = projects.projects.Bidspace.image
    link = projects.projects.Bidspace.link
  }
  

  return (
    <div className='project'>
      <h1 className="project__heading"> Projects</h1>
      <div >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
          </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {details}
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href={link}>View</a>
        </Button>  
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default Projects
