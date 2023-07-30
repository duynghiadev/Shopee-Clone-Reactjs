import matchers from '@testing-library/jest-dom/matchers'
import { screen, waitFor } from '@testing-library/react'
import path from 'src/constants/path'
import { logScreen, renderWithRouter } from 'src/utils/testUtils'
import { describe, expect, it } from 'vitest'

expect.extend(matchers)

describe('Login', () => {
  it('Hiển thị lỗi required khi không nhập gì', async () => {
    const { user } = renderWithRouter({
      route: path.login
    })

    await waitFor(() => {
      expect(screen.queryByPlaceholderText('Email')).toBeInTheDocument()
    })

    const submitButton = document.querySelector('form button[type="submit"]') as Element
    user.click(submitButton)
    expect(await screen.findByText('Email là bắt buộc')).toBeTruthy()
    expect(await screen.findByText('Password là bắt buộc')).toBeTruthy()

    await logScreen()
  })
})
