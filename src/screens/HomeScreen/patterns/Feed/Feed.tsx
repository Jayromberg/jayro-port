import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from '@src/components/Icon/Icon';
import Image from '@src/components/Image/Image';
import Link from '@src/components/Link/Link';

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
      <Image
        styleSheet={{
          width: '128px',
          height: '128px',
          borderRadius: '100%',
        }}
        src="https://github.com/Jayromberg.png"
        alt="Imagem de perfil do Jayromberg Lima Santos"
      />
      <Link href="https://www.linkedin.com/in/jayromberg-lima-santos/">
        <Icon name="linkedin" />
      </Link>
      <Link href='/sobre'>
        Sobre
      </Link>
      <Icon name='github' />
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
