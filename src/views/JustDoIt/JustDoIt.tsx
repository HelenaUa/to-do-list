import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { StyledButton, StyledTextField } from './JustDoIt.styled';
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
          width="60%"
          display="flex"
          flexDirection="column"
          margin="50px auto"
        >
          <Typography
            display="flex"
            justifyContent="center"
            alignItems="center"
            variant="h1"
            color="#fff"
          >
            Just do it
          </Typography>
          <Box position="relative" marginBottom="50px">
            <StyledTextField
              placeholder="Add a task"
              value={task}
              onChange={e => setTask(e.target.value)}
            />
            <StyledButton onClick={handleAddTask}>Ok</StyledButton>
          </Box>
          {tasks.map((task, index) => (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              margin="10px 0"
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
