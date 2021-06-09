import { Grid } from '@material-ui/core';
import React from 'react';
import Post from '../../components/Post/Post';
import { getAllPosts } from '../../mocks/PostServiceMock';
import styles from './Posts.module.scss';

const Posts: React.FC = () => {

  let posts = getAllPosts();

  return (
    <div className={styles.root}>
      <Grid container spacing={3} direction="row" justify="center" alignItems="center">
        {posts.map(post => (
          <Grid item md={4} xs={12} key={post.id} >
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;
