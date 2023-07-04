// Đây là kiểu Student item

export interface Student {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  country: string
  avatar: string
  btc_address: string
}

/**
 * Để tiện lợi hơn, chúng ta dùng method Pick của typescript.
 *
 * - Tham số đầu tiên là chúng ta sẽ chọn cái interface nào ? (Ở đây chúng ta chọn interface Student).
 * - Và tham số thứ 2 là cái mà chúng ta sẽ chọn ra những thứ mà chúng ta sẽ dùng.
 *
 * - Và cuối cùng nó là một dạng Array. Thêm [] vào nữa thì mới đúng kiểu của nó nha !!
 */

export type Students = Pick<Student, 'id' | 'email' | 'avatar' | 'last_name'>[]
