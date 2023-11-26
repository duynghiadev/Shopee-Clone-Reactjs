import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { path } from './constants/path'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import UnauthenticatedGuard from './guards/UnauthenticatedGuard'
import AuthenticatedGuard from './guards/AuthenticatedGuard'
import CartLayout from './layouts/CartLayout/CartLayout'
import Fallback from './components/Fallback/Fallback'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

const Home = lazy(() => import('./pages/Home/Home'))
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail'))
const User = lazy(() => import('./pages/User/User'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const Register = lazy(() => import('./pages/Auth/Register/Register'))
const Login = lazy(() => import('./pages/Auth/Login/Login'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

export default function RoutesComponent() {
  return (
    <Routes>
      <Route
        path={path.home}
        exact
        element={
          <MainLayout>
            <Suspense fallback={<Fallback />}>
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            </Suspense>
          </MainLayout>
        }
      ></Route>
      <Route
        path={path.productDetail}
        exact
        element={
          <MainLayout>
            <Suspense fallback={<Fallback />}>
              <ErrorBoundary>
                <ProductDetail />
              </ErrorBoundary>
            </Suspense>
          </MainLayout>
        }
      ></Route>
      <Route
        path={path.login}
        element={
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng nhập">
              <Suspense fallback={<Fallback />}>
                <ErrorBoundary>
                  <Login />
                </ErrorBoundary>
              </Suspense>
            </RegisterLayout>
          </UnauthenticatedGuard>
        }
      ></Route>
      <Route
        path={path.register}
        element={
          <UnauthenticatedGuard>
            <RegisterLayout title="Đăng ký">
              <Suspense fallback={<Fallback />}>
                <ErrorBoundary>
                  <Register />
                </ErrorBoundary>
              </Suspense>
            </RegisterLayout>
          </UnauthenticatedGuard>
        }
      ></Route>
      <Route
        path={path.user + '/*'}
        element={
          <AuthenticatedGuard>
            <MainLayout>
              <Suspense fallback={<Fallback />}>
                <ErrorBoundary>
                  <User />
                </ErrorBoundary>
              </Suspense>
            </MainLayout>
          </AuthenticatedGuard>
        }
      ></Route>
      <Route
        path={path.cart}
        element={
          <AuthenticatedGuard>
            <CartLayout>
              <Suspense fallback={<Fallback />}>
                <ErrorBoundary>
                  <Cart />
                </ErrorBoundary>
              </Suspense>
            </CartLayout>
          </AuthenticatedGuard>
        }
      ></Route>
      <Route
        path={path.notFound}
        element={
          <Suspense fallback={<Fallback />}>
            <ErrorBoundary>
              <NotFound />
            </ErrorBoundary>
          </Suspense>
        }
      ></Route>
    </Routes>
  )
}
