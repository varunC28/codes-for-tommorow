import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/postSlice';
import Pagination from '@mui/material/Pagination';

const PostPagination = ({totalPosts, postsPerPage}) => {
    const dispatch = useDispatch(); 
    const {currentPage} = useSelector((state) => state.posts);

    const pageCount = Math.ceil(totalPosts/postsPerPage);

    const handleChange = (event,value) => {
        dispatch(setPage(value));
    };

    return(
        <Pagination count={pageCount} page={currentPage} onChange={handleChange} />
    );
};

export default PostPagination;