import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Props = {
  children: React.ReactNode
  deg?: number
  scale?: number
  delay?: number
  duration?: number
  type?: string
}

const Flip: React.FC<Props> = ({
  children,
  deg = 260,
  scale = 1.5,
  duration = 1.8,
  delay = 0.2,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ rotateY: deg, scale: scale, opacity: 0 }}
      animate={{
        rotateY: isInView ? 0 : deg,
        scale: isInView ? 1 : scale,
        opacity: isInView ? 1 : 0,
      }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
export default Flip
