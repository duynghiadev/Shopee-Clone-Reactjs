import React, { createContext, useCallback, useContext, useDebugValue, useId, useMemo, useState } from 'react'
import './welcome.css'

interface ThemeType {
  theme: {
    color: 'light' | 'dark'
  }
  onChangeTheme: (color: 'light' | 'dark') => void
}

const ThemeContext = createContext<ThemeType>({
  theme: {
    color: 'light'
  },
  onChangeTheme: () => {}
})

const doTask = (value: any) => {
  for (let i = 0; i < 99999; i++) {}
  return value === 'light' ? 'theme is light' : 'theme is dark'
}

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType['theme']>({ color: 'light' })
  const onChangeTheme = useCallback((color: 'light' | 'dark') => {
    setTheme((prev) => ({ ...prev, color }))
  }, [])

  useDebugValue(theme.color, doTask)

  return {
    theme,
    onChangeTheme
  }
}

export default function Welcome() {
  const { onChangeTheme, theme } = useTheme()
  const [, forceRender] = useState({})

  const valueContext = useMemo(() => {
    return { theme, onChangeTheme }
  }, [theme, onChangeTheme])

  const pleaseRender = () => forceRender({})

  return (
    <div className='welcome'>
      <div>
        <button onClick={pleaseRender}>Please Render Welcome</button>
      </div>
      <ThemeContext.Provider value={valueContext}>
        <Form />
        <Label />
      </ThemeContext.Provider>
    </div>
  )
}

const Label = React.memo(() => {
  const { theme, onChangeTheme } = useContext(ThemeContext)
  const id = useId()
  return (
    <div>
      <input
        type='checkbox'
        checked={theme.color === 'dark'}
        onChange={(e) => {
          onChangeTheme(e.target.checked ? 'dark' : 'light')
        }}
        id={id + 'Label'}
      />
      <label htmlFor={id + 'Label'}>Use dark mode</label>
    </div>
  )
})

const Form = () => {
  return (
    <Panel title='Welcome'>
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  )
}

const Panel = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext)
  const className = 'panel-' + theme.color
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

const Button = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext)
  const className = 'button-' + theme.color
  return <button className={className}>{children}</button>
}
