import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PostCard = ({ post, onRemove }) => {
    return (
        <Card 
            className="post-card" 
            variant="outlined" 
            style={{ position: 'relative', height: '400px' }} 
        >
            <IconButton 
                onClick={onRemove} 
                style={{ position: 'absolute', top: '8px', right: '8px', color: 'red' }} 
                aria-label="remove"
            >
                <CloseIcon />
            </IconButton>
            <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography 
                    variant="h5" 
                    component="div" 
                    style={{ 
                        margin: '10px 15px',
                        flex: '0 1 40px', 
                        height: '40px', 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis', 
                        whiteSpace: 'nowrap', 
                        marginTop: '40px' 
                    }}
                >
                    <b>{post.title}</b>
                </Typography>
                <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    style={{ 
                        margin: '0px 15px',
                        flex: '1 1 auto', 
                        maxHeight: '100px',
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis', 
                        display: '-webkit-box', 
                        WebkitLineClamp: 3,  
                        WebkitBoxOrient: 'vertical' 
                    }}
                >
                    {post.body}
                </Typography>
                <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    style={{ 
                        margin: '2px 15px', 
                        color: 'grey', 
                        textAlign: 'left' 
                    }}
                >
                    Mon, 21 Dec 2020 14:57 GMT
                </Typography>
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="sampleimg1" 
                    style={{ 
                        width: '300px', 
                        height: '150px', 
                        objectFit: 'cover', 
                        borderRadius: '3px', 
                        margin: '8px 0 0 15px' 
                    }} 
                />
            </CardContent>
        </Card>
    );
};

export default PostCard;
