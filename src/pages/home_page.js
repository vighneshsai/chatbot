import React, { useState } from 'react';
import { Box, TextField, IconButton, Typography, Paper, Button, Avatar, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import botAvatar from '../assets/botAvathar.png'; // Add your bot avatar image in the src/assets folder

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { sender: 'Bot', message: 'Hi! Welcome to Tech Support. I\'ll be assisting you here today.' },
        { sender: 'Bot', message: 'How can I help you today?' }
    ]);

    const handleSendMessage = () => {
        if (message.trim()) {
            setChatHistory([...chatHistory, { sender: 'User', message }]);
            setMessage('');
        }
    };

    return (
        <Box sx={{ position: 'fixed', bottom: 20, right: 20, width: 350 }}>
            <Paper elevation={3} sx={{ borderRadius: 3 }}>
                <Box sx={{ backgroundColor: '#007bff', padding: 2, borderTopLeftRadius: 12, borderTopRightRadius: 12, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar src={botAvatar} alt="Bot Avatar" />
                        <Typography variant="h6">Tech Support</Typography>
                    </Stack>
                   
                </Box>
                <Box sx={{ padding: 2, maxHeight: 400, overflowY: 'auto' }}>
                    {chatHistory.map((chat, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: chat.sender === 'User' ? 'flex-end' : 'flex-start',
                                marginBottom: 1.5,
                            }}
                        >
                            {chat.sender === 'Bot' && (
                                <Avatar src={botAvatar} alt="Bot Avatar" sx={{ marginRight: 1 }} />
                            )}
                            <Paper sx={{
                                padding: 1.5,
                                maxWidth: '70%',
                                backgroundColor: chat.sender === 'User' ? '#dcf8c6' : '#fff',
                                borderRadius: chat.sender === 'User' ? '12px 12px 0 12px' : '12px 12px 12px 0',
                            }}>
                                <Typography variant="body2">{chat.message}</Typography>
                            </Paper>
                        </Box>
                    ))}
                    
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' ? handleSendMessage() : null}
                        sx={{ marginRight: 1 }}
                    />
                    <IconButton color="primary" onClick={handleSendMessage}>
                        <SendIcon />
                    </IconButton>
                </Box>
            </Paper>
        </Box>
    );
};

export default Chatbot;
