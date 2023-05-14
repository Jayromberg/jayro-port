import Box from "@src/components/Box/Box";
import { useTheme } from "@src/theme/ThemeProvider";
import Text from "@src/components/Text/Text";
import Background from "./patterns/Background/Background";
import Feed from "./patterns/Feed/Feed";
import Menu from "./patterns/Menu/Menu";
import Footer from "./patterns/Footer/Footer";


export default function HomeScreen() {
  const theme = useTheme();
  return (
    <Box
      tag="main"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Menu />
      {/* <Background /> */}
      {/* <Menu />
      <Feed>
        <Feed.Header />
      </Feed>
      <Footer /> */}
      {/* <Feed>
        <Feed.Header />
        <Text
          variant='display1'
        >
          Últimas Atualizações
        </Text>
        <Feed.Posts />
      </Feed> */}
    </Box>
  )
}
