import React from 'react';
import './AllProject.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import agency from './images/agency.png';
import travel from './images/travel.PNG';
import education from './images/education.PNG';
import airbnb from './images/airbnb.PNG';


const AllProject = () => {
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      });
      
    
        const classes = useStyles();
      
    return (
            <div className="row project-sec" id="projects">
               
                <div className="col-md-3">
                    <div className="card-sec">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={agency}
                        title="Creative Agency"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           Creative Agency
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This is based on an agency related website.
                        Here anyone can provide services related to his own work.
                        Each people have to register before that.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className="card-btn" size="small" >
                            <a href="https://creative-agency-m696.web.app/" target="_blank">
                            Live Link
                        </a>
                        </Button>
                        <Button className="card-btn" size="small" color="primary">
                        <a href="https://github.com/Nishat96/creative-agency-client" target="_blank">
                        Git Repo Link
                        </a>
                        </Button>
                    </CardActions>
                    </Card>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card-sec">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={travel}
                        title="Travel-site"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Travel-site
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Based on Tourism Management System.
                        User have to register to book any place, also has login option, after log on to the site you can book a hotel. 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className="card-btn" size="small" >
                        <a href="https://travel-site-m696.web.app/" target="_blank">
                        Live Link
                        </a>
                        </Button>
                        <Button className="card-btn" size="small" color="primary">
                        <a href="https://github.com/Nishat96/travel-site" target="_blank">
                        Git Repo Link
                        </a>
                        </Button>
                    </CardActions>
                    </Card>
                    </div>
                </div>
                <div className="col-md-3">
                <div className="card-sec">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={education}
                        title="Educational Platform"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Educational Platform
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Students can enroll here.
                        They can see how many courses they have selected
                        Also can check the total price.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className="card-btn" size="small" color="primary">
                        <a href="https://online-education-site-696.netlify.app/" target="_blank">
                        Live Link
                        </a>
                        </Button>
                        <Button className="card-btn" size="small" color="primary">
                        <a href="https://github.com/Nishat96/online-education-site" target="_blank">
                        Git Repo Link
                        </a>
                        </Button>
                    </CardActions>
                    </Card>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card-sec">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={airbnb}
                        title="Airbnb-clone"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Airbnb-clone
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Based on Airbnb.com official Website.
                        Any one can search dates if there is available ticket or not.
                        Also can explore nearby places.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className="card-btn" size="small" color="primary">
                        <a href="https://airbnb-clone-m696.web.app/" target="_blank">
                        Live Link
                        </a>
                        </Button>
                        <Button className="card-btn" size="small" color="primary">
                        <a href="https://github.com/Nishat96/Airbnb-demo" target="_blank">
                        Git Repo Link
                        </a>
                        </Button>
                    </CardActions>
                    </Card>
                </div>
                </div>
               
            </div>
         
    );
};

export default AllProject;