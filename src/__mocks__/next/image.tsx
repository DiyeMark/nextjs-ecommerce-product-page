import React from 'react'
import type { ImageProps } from 'next/image'

const MockNextImage = (props: ImageProps) => {
  const modifiedProps = {
    ...props,
    fill: props.fill?.toString(),
    priority: props.priority?.toString(),
  }
  // eslint-disable-next-line @next/next/no-img-element
  return React.createElement('img', {
    ...modifiedProps,
    alt: modifiedProps.alt || '',
  })
}

export default MockNextImage 