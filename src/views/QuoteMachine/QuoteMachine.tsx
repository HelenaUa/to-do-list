import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { StyledContainer, StyledButton } from './QuoteMachine.styled';
import { Loader, ContentWrapper } from 'ui';

interface Quote {
  text: string;
  author: string;
}

interface IQuoteMachineProps {
  backgroundColor: string;
}

const QuoteMachine = ({ backgroundColor }: IQuoteMachineProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [quote, setQuote] = useState<Quote>({ text: '', author: '' });
  const [bgColor, setBgColor] = useState<string>('#ffffff');

  const fetchQuote = async () => {
    setLoading(true);
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote({
      text: data.content,
      author: data.author,
    });
    setBgColor(generateRandomColor());
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <ContentWrapper>
      {loading ? (
        <Loader />
      ) : (
        <StyledContainer backgroundcolor={bgColor}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h4" align="center" gutterBottom>
              "{quote.text}"
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
              - {quote.author}
            </Typography>
            <Box>
              <StyledButton onClick={fetchQuote}>New Quote</StyledButton>
            </Box>
          </Box>
        </StyledContainer>
      )}
    </ContentWrapper>
  );
};

export default QuoteMachine;
