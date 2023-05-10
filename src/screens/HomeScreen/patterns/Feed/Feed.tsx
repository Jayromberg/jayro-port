import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from '@src/components/Icon/Icon';

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }: FeedProps) {
  return (
    <Box>
      <Text>
        Feed Base
      </Text>
      {children}
    </Box>
  )
}

Feed.Header = () => {
  return (
    <Box>
      <Icon name='github' />
      <Icon name='default_icon' />
      <Text>
        Feed Header
      </Text>
    </Box>
  )
}

Feed.Posts = () => {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  )
}
