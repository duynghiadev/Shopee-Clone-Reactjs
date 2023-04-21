import React from 'react'
import styles from './title.module.scss'

type TitleProps = {
  address: {
    street: string
  }
}

function Title(props: TitleProps) {
  /**
   * Do Component TaskInput render nên Component Title render
   * Bởi vì Component Title là con của Component TaskInput
   * => Component cha render dẫn đến Component con render theo
   */
  console.log('address render: ', props.address)
  return <h1 className={styles.title}>To do list typescript</h1>
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

export default React.memo(Title)
