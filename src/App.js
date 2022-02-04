import './App.css';
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Checkbox from '@mui/material/Checkbox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';



const App = () => {
  return (
    <div>
      <Button sx={{ m: 1 }} variant="outlined" color="error">
        Hola
      </Button>
      <Box
        sx={{
          bgcolor: 'primary.main',
          boxShadow: 1,
        }}
      >
        Hola
      </Box>
      <Box sx={{ width: 300, height: 300 }}>
        <Card sx={{ m: 2 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              be nev o lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
            <CardActions>
              <Button variant="contained">Hola</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ width: 300, height: 300 }}>
        <Card sx={{ m: 2, maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image="http://placekitten.com/200"
            alt="imagen gatito"
          />
          <CardContent>
            <Typography variant="h6">Our Changing Planet</Typography>
            <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
              by Kurt Wagner
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Visit ten places on our planet that are undergoing the bigges
              changes today
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="secondary">
              Read
            </Button>
            <Button size="small" color="secondary">
              Bookmark
            </Button>
            <Checkbox icon={<FavoriteIcon />} checkedIcon={<FavoriteIcon />} />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>

      <Box sx={{ width: 300, height: 300, display: 'inline' }}>
        <Card sx={{ m: 3, width: 300 }}>
          <CardContent>
            <CardMedia
              component="img"
              sx={{ m: 1, width: 151 }}
              image="http://placekitten.com/200"
              alt="imagen gatito"
            />
          </CardContent>
          <CardActions>
            <Checkbox icon={<FavoriteIcon />} checkedIcon={<FavoriteIcon />} />
            <IconButton aria-label="bookmark">
              <BookmarkIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>

      <Box sx={{ width: 300, height: 300 }}>
        <Card sx={{ m: 3, maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image="http://placekitten.com/250"
            alt="imagen gatito"
          />
          <CardContent>
            <Typography variant="h6">Cafe Badilico</Typography>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </Stack>
            <Typography color="text.primary">$ . Italian, Cafe</Typography>
            <Typography color="text.secondary">
              Visit ten places on our planet that are undergoing the bigges
              changes
            </Typography>
            <Divider variant="middle" />
          </CardContent>
          <Typography color="text.primary">Tonight´s availabillity</Typography>
          <Stack direction="row" spacing={0.5}>
            <Chip label="5:30 PM" />
            <Chip color="primary" label="7:30 PM" />
            <Chip label="8:00 PM" />
            <Chip label="9:00 PM" />
          </Stack>
          <Button size="small" color="secondary">
            RESERVE
          </Button>
        </Card>
      </Box>
    </div>
  );
}

export default App;
