import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {
  StyledButton,
  StyledTextField,
  StyledTypography,
} from './JustDoIt.styled';
import { Loader, ContentWrapper, IconButton } from 'ui';

interface ITask {
  text: string;
  completed: boolean;
}

const JustDoIt = ({ text, completed }: ITask) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleComplete = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <ContentWrapper>
      {loading ? (
        <Loader size={190} />
      ) : (
        <Box
          width="100%"
          height="100vh"
          bgcolor="#898a8a"
          display="flex"
          flexDirection="column"
          padding="0px"
        >
          <StyledTypography variant="h1">Just do it</StyledTypography>
          <Box position="relative" margin="0px 50px 50px 50px">
            <StyledTextField
              placeholder="Add a task"
              value={task}
              onChange={e => setTask(e.target.value)}
            />
            <StyledButton onClick={handleAddTask}>Ok</StyledButton>
          </Box>
          {tasks.map((task, index) => (
            <Box
              bgcolor="#898a8a"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="10px 0px"
              key={index}
            >
              <Box
                width="fit-content"
                height="52px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="1px solid #000000DE"
                borderRadius="30px"
                padding="0px 15px 0px 30px"
                margin="0px 36%"
                flexGrow="1"
                sx={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                <Typography variant="body1" flexGrow="1">
                  {task.text}
                </Typography>
                <Box display="flex" gap="5px" marginLeft="15px">
                  <IconButton
                    iconType="done"
                    completed={task.completed}
                    onClick={() => handleToggleComplete(index)}
                  />
                  <IconButton
                    iconType="delete"
                    onClick={() => handleDeleteTask(index)}
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </ContentWrapper>
  );
};

export default JustDoIt;
