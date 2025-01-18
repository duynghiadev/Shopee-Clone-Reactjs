import React, { useRef, useState } from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
  handleClickTitle: (value: any) => void
}

function Title(props: TitleProps) {
  /**
   * Do Component TaskInput render nên Component Title render
   * Bởi vì Component Title là con của Component TaskInput
   * => Component cha render dẫn đến Component con render theo
   */
  console.log('address render: ', props.address)
  console.log('props: ', props)

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

function equal(prevProp: any, nextProps: any) {
  /**
   * => Chú ý: Đây là cách viết ngắn gọn để return trả về prevProp và nextProps:
   * return prevProp.address.street === nextProps.address.street
   *
   * => Nếu dùng cách viết return ngắn gọn đó thì comment những dòng code này lại:
   *
   * if (prevProp.address.street === nextProps.address.street) {
   * return true
   * }
   * return false
   *
   * => Còn nếu thấy dòng code đó khó hiểu quá thì viết theo cách dưới cho dễ hiểu
   */

  if (prevProp.address.street === nextProps.address.street) {
    return true
  }
  return false
}

/**
 * Do chúng ta đã dùng Hook useMemo() nên không cần thiết phải dùng function equal nữa
 * => export default React.memo(Title)
 * Nếu muốn dùng function equal thì ta phải chuyển qua dùng React.memo()
 * => export default React.memo(Title ,equal)
 * Còn dùng Hook useMemo() thì không cần dùng cũng được
 */

export default React.memo(Title)
