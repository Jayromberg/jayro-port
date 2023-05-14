import Box from "@src/components/Box/Box";
import Link from "@src/components/Link/Link";
import { StyleSheet } from "@src/theme/StyleSheet";

interface NavBarProps {
  styleSheet?: StyleSheet;
}
export default function NavBar({ styleSheet, ...props }: NavBarProps ){ 
  return (
    <Box tag="ul" styleSheet={styleSheet} {...props}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre">Sobre</Link>
      </li>
    </Box>
  )
}