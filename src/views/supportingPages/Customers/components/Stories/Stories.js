import React from 'react';
import PropTypes from 'prop-types';
/*import { useTheme } from '@mui/material/styles';*/
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

const Stories = () => {
  /*const theme = useTheme();*/

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Projects
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          A journey of turning data into actionable intelligence
          <br />
          Explore the fusion of Python development, data science and data expertise
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140}}
              image=""
              title="Project1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The project 1 is blabla
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Learn more</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140}}
              image=""
              title="Project2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The project 2 is blabla
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Learn more</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140}}
              image=""
              title="Project3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The project 3 is blabla
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Learn more</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

Stories.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Stories;
