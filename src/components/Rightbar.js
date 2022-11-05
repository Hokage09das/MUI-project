import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box
        position='fixed'
        width={450}
      >
        <Typography
          variant='h6'
          fontWeight={100}
        >
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt='Remy Sharp'
            src='https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo'
          />
          <Avatar
            alt='Travis Howard'
            src='https://i.pinimg.com/originals/3c/dd/b9/3cddb98d5ca552480f34eb82540890a4.jpg'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://i.pinimg.com/originals/3c/dd/b9/3cddb98d5ca552480f34eb82540890a4.jpg'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://www.meme-arsenal.com/memes/c8140f368997ad2e0935d5a42272b5bc.jpg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHC2xN02IZFHN2f_5dP3wexrGIQy_LbV3leg&usqp=CAU'
          />{" "}
          <Avatar
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
          />
          <Avatar
            alt='Travis Howard'
            src='/static/images/avatar/2.jpg'
          />
          <Avatar
            alt='Cindy Baker'
            src='/static/images/avatar/3.jpg'
          />
          <Avatar
            alt='Agnes Walker'
            src='/static/images/avatar/4.jpg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='/static/images/avatar/5.jpg'
          />
        </AvatarGroup>
        <Typography
          variant='h6'
          fontWeight={100}
          mt={2}
          mb={2}
        >
          Latest Photos
        </Typography>
        <ImageList
          cols={3}
          rowHeight={100}
          gap={5}
        >
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
              alt=''
            />
          </ImageListItem>{" "}
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
              alt=''
            />
          </ImageListItem>{" "}
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
              alt=''
            />
          </ImageListItem>
        </ImageList>
        <Typography
          variant='h6'
          fontWeight={100}
          mt={2}
          mb={2}
        >
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Remy Sharp'
                src='/static/images/avatar/1.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider
            variant='inset'
            component='li'
          />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Travis Howard'
                src='/static/images/avatar/2.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider
            variant='inset'
            component='li'
          />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Cindy Baker'
                src='/static/images/avatar/3.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
