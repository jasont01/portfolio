import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  x?: number
  y?: number
  delay?: number
  duration?: number
  type?: string
}

const Fade: React.FC<Props> = ({
  children,
  x = 0,
  y = 0,
  delay = 0.5,
  duration = 1.2,
  type = 'tween',
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ x, y, opacity: 0 }}
      animate={{
        x: isInView ? 0 : x,
        y: isInView ? 0 : y,
        opacity: isInView ? 1 : 0,
      }}
      transition={{ duration, delay, type }}
    >
      {children}
    </motion.div>
  )
}
export default Fade
