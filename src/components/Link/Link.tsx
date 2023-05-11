import React from 'react';
import NextLink from 'next/link';
import Text from "../Text/Text";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeColorVariant, ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";


interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: ThemeColorVariant;
  colorVariantEnabled?: boolean;
}

const Link = React.forwardRef(({
  href,
  children,
  colorVariant,
  styleSheet,
  colorVariantEnabled,
  ...props
}:LinkProps, ref) => {
  const theme = useTheme();
  const isIExternalLink = href.startsWith('http');

  const currentColorSet = {
    color: theme.colors[colorVariant || 'primary'].x500,
    hover: {
      color: theme.colors[colorVariant || 'primary'].x400,
    },
    focus: {
      color: theme.colors[colorVariant || 'primary'].x600,
    }
  };

  const linkProps = {
    tag: 'a',
    ref,
    children,
    href,
    styleSheet: {
      textDecoration: 'none',
      ...colorVariantEnabled && {
        color: currentColorSet.color,
      },
      ...styleSheet,
      hover: {
        ...styleSheet?.hover,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        }
      },
      focus: {
        ...styleSheet?.focus,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        }
      },
    },
    ...props
  }

  if(isIExternalLink) return (
    <Text 
      {...{
        target: '_blank',
        ...linkProps,
      }}
    />
  )

  return (
    <NextLink href={href} legacyBehavior passHref>
      <Text {...linkProps} />
    </NextLink>
  )
});

Link.defaultProps = {
  colorVariant: 'primary',
  colorVariantEnabled: true,
};

export default Link;
