interface Register {
  email: string
  password: string
  name: string,
  date_of_birth: string,
  address: string,
  phone: string
}

interface Login {
  email: string
  password: string
}

interface PayloadToken {
  id: string,
  email: string,
  roles: string[],
  created_at: string
}

interface Token {
  tokens: string[]
}
