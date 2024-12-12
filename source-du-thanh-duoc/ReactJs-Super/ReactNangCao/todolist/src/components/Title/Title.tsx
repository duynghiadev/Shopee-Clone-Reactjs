import React, { useRef, useState } from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
  handleClickTitle: (value: any) => void
}

function Title(props: TitleProps) {
  // console.log(props)
  // const [color, setColor] = useState<string | undefined>(undefined)
  const h1Ref = useRef<HTMLHeadingElement>(null)

  const clickH1 = () => {
    if (h1Ref.current) {
      h1Ref.current.style.color = 'red'
    }
    // setColor('red')
  }

  return (
    <h1 className={styles.title} ref={h1Ref} onClick={clickH1}>
      To do list typescript
    </h1>
  )
}

function equal(prevProp: TitleProps, nextProps: TitleProps) {
  return prevProp.address.street === nextProps.address.street
}

export default React.memo(Title)
