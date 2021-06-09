import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import styles from './Post.module.scss';
import PostProps from './Post.props';

const Post: React.FC<PostProps> = (props: PostProps) => {
  const { post, ...other } = props;

  const index = Math.floor(Math.random() * 19) + 1;
  const imageName = 'dog' + index + '.jpg';

  return (
    <Card className={styles.root}>
      <CardActionArea>
        <CardMedia
          className={styles.media}
          component="img"
          image={`/images/${imageName}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
