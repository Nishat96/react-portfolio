import React from 'react';
import './AllProject.css';
import {makeStyles} from '@material-ui/core/styles';
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
import doctor from './images/doctor.PNG';
import youtube from './images/youtube.PNG';
import pool from './images/pool-pro.png';
import food from './images/food.png';
import business from './images/business.PNG';
import wood from './images/wood.PNG';

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
        <section id="projects">
            <h3 className="works">Some of My Works</h3>
            <div className="row project-sec">
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
                                <Button className="card-btn" size="small">
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
                                        User have to register to book any place, also has login option, after log on to
                                        the site you can book a hotel.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button className="card-btn" size="small">
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
                                        They can see how many courses they have selected.
                                        Also can check the total price with each quantity of their course item.
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
            <div className="row project-sec">
                <div className="col-md-3">
                    <div className="card-sec">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={youtube}
                                    title="Youtube-clone"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Youtube clone
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Its a clone of YouTube.com. Here we can see recommended video's section. Also
                                        there is a side bar similar to official Youtube.com.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button className="card-btn" size="small" color="primary">
                                    <a href="https://youtube-clone-m696.netlify.app/">
                                        Live Link
                                    </a>
                                </Button>
                                <Button className="card-btn" size="small" color="primary">
                                    <a href="https://github.com/Nishat96/Youtube-clone" target="_blank">
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
                                    image={doctor}
                                    title="Doctor's-portal"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Doctor's Portal
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        It's a doctor's portal site. Where anyone can get appointment.
                                        Any one can see patients reviews, doctor's services.
                                        Also can contact if needed.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button className="card-btn" size="small" color="primary">
                                    <a href="https://doctors-portal-m696.netlify.app/" target="_blank">
                                        Live Link
                                    </a>
                                </Button>
                                <Button className="card-btn" size="small" color="primary">
                                    <a href="https://github.com/Nishat96/doctors-portal-client" target="_blank">
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
                                    image={pool}
                                    title="Pool Pro (Mobile App)"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Pool Pro (Mobile App)
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        A calculator for calculation of swimming pool water.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button className="card-btn" size="small" color="primary">
                                        <a href=" https://drive.google.com/drive/folders/1ac0UxV1ZW0UX2ywzHtVAfbcTROb8RBxW?usp=sharing"
                                           target="_blank">
                                            Screenshot link
                                        </a>
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card-sec">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={food}
                                    title="Food Items (Mobile App)"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Food Items (Mobile App)
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        A Food Delivery App. (Still on working)
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button className="card-btn" size="small" color="primary">
                                        <a href=" https://drive.google.com/drive/folders/1ac0UxV1ZW0UX2ywzHtVAfbcTROb8RBxW?usp=sharing"
                                           target="_blank">
                                            Screenshot link
                                        </a>
                                    </Button>
                                    <Button className="card-btn" size="small" color="primary">
                                        <a href="https://github.com/Nishat96/foodApp" target="_blank">
                                            Git Repo Link
                                        </a>
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="row project-sec">
                <div className="col-md-3">
                    <div className="card-sec">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={business}
                                    title="UI/UX Design"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        UI/UX Design
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button className="card-btn" size="small" color="primary">
                                    <a href=" https://www.figma.com/file/T3mMYRlvgCeFF16DRk5ISQ/Business-Work?node-id=0%3A1">
                                        Figma Link
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
                                    image={wood}
                                    title="UI/UX Design"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        UI/UX Design
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button className="card-btn" size="small" color="primary">
                                    <a href="https://www.figma.com/file/lo0NWsEkmbIXH1x8ixRJMr/wood-site?node-id=0%3A1">
                                        Figma Link
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default AllProject;
