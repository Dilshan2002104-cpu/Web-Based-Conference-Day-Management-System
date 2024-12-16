import PropTypes from "prop-types";
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia, styled } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
  transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
  '&:hover': {
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1)", 
    transform: "translateY(-5px)", 
  },
}));

const SpeakerCard = ({ name, image, bio, sessionDetails }) => {
  return (
    <div>
      <Box width="300px">
        <StyledCard>
          <CardMedia
            component="img"
            height="140"
            image={image || "https://via.placeholder.com/300x140"}
            alt={`${name}'s Image`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              {bio}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Session:</strong> {sessionDetails.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Time:</strong> {sessionDetails.time}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Venue:</strong> {sessionDetails.venue}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              View Profile
            </Button>
            <Button size="small" variant="outlined">
              Add to Schedule
            </Button>
          </CardActions>
        </StyledCard>
      </Box>
    </div>
  );
};

SpeakerCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,           
  bio: PropTypes.string.isRequired, 
  sessionDetails: PropTypes.shape({  
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
  }).isRequired,
};

export default SpeakerCard;
