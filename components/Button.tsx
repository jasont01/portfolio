import { UnstyledButton } from '@mantine/core'

type Props = {
  children: React.ReactNode
  link?: string
  size?: string
  dark?: boolean
  anchor?: boolean
}

const Button: React.FC<Props> = ({
  children,
  link,
  size = '1.5rem',
  dark = false,
  anchor = true,
}) => {
  return (
    <UnstyledButton
      component={anchor ? 'a' : 'button'}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={(theme) => ({
        fontSize: size,
        fontWeight: 700,
        color: theme.white,
        padding: '1rem',
        border: `2px solid ${theme.white}`,
        backgroundClip: 'text',
        position: 'relative',
        zIndex: 1,
        marginRight: '1em',
        '&::after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          width: '0px',
          height: '100%',
          left: 0,
          bottom: 0,
          zIndex: -1,
          transition: 'all cubic-bezier(0.19, 1, 0.22, 1) 0.3s',
          backgroundImage: theme.fn.gradient(),
        },
        '&:hover': {
          borderColor: theme.colors.primary[0],
          color: theme.colors.primary[0],
          '&::after': { width: '100%', background: dark ? theme.black : '' },
        },
      })}
    >
      {children}
    </UnstyledButton>
  )
}
export default Button
