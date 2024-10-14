import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, removePost, setPage } from '../redux/postSlice';
import PostCard from './PostCard';
import CircularProgress from '@mui/material/CircularProgress';
import PostPagination from './PostPagination';
import Grid from '@mui/material/Grid'; // Import Grid component
import Container from '@mui/material/Container'; // Optional: to center the content

const Posts = () => {
    const dispatch = useDispatch();
    const { posts, loading, currentPage } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleRemovePost = (id) => {
        dispatch(removePost(id));
    };

    const postsPerPage = 6;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    if (loading) return <CircularProgress />;
    if (!posts.length) return <div>No posts available</div>;

    return (
        <Container>
            <Grid container spacing={2}>
                {currentPosts.map(post => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}> {/* 4 columns for medium and larger screens */}
                        <PostCard post={post} onRemove={() => handleRemovePost(post.id)} />
                    </Grid>
                ))}
            </Grid>
            <PostPagination
                totalPosts={posts.length}
                postsPerPage={postsPerPage}
                currentPage={currentPage}
                setPage={(page) => dispatch(setPage(page))}
            />
        </Container>
    );
};

export default Posts;
