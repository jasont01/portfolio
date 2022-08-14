import { Box } from '@mantine/core'

type Props = {
  children?: React.ReactNode
  name: string
}
const Tag: React.FC<Props> = ({ children, name }) => {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        color: theme.black,
        backgroundColor: theme.white,
        width: 'fit-content',
        padding: '3px 6px',
        borderRadius: '8px',
        marginRight: '6px',
        marginBottom: '10px',
        boxShadow: 'inset -5px 5px 10px #666358, inset 5px -5px 10px #ffffff',
      })}
    >
      <span>{children}</span>
      <Box sx={{ fontFamily: 'Source Code Pro, monospace', fontSize: '12px' }}>
        <span>{name}</span>
      </Box>
    </Box>
  )
}
export default Tag
