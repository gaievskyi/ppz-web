export const onPresent = {
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
  hidden: { opacity: 0, y: 200 }
}

export const onImagePresent = {
  visible: {
    opacity: 1,
    scale: 1.1,
    transition: { duration: 0.7, delay: 0.1 }
  },
  hidden: {
    opacity: 0,
    scale: 1
  }
}
