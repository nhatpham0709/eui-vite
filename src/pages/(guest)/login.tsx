import React, { useState } from 'react'
import {
  EuiButton,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiFieldPassword,
  EuiSpacer,
  EuiPanel,
  EuiText
} from '@elastic/eui'
import { Link } from 'react-router-dom'
import { useNavigate } from '@/router'
import Meta from '@/components/Meta'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { handleError } from '@/utils/handleError'
const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
})

type FormData = {
  email: string
  password: string
}

export default function Page() {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    const { email, password } = data

    try {
      navigate('/')
    } catch (e) {
      handleError(e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Meta title='Login' />
      <EuiPanel className='mx-auto max-w-[430px]'>
        <EuiForm component='form' onSubmit={handleSubmit(onSubmit)}>
          <EuiFormRow>
            <EuiText>
              <h2 className='text-center'>Login</h2>
            </EuiText>
          </EuiFormRow>
          <EuiSpacer />
          <EuiFormRow label='Email' isInvalid={Boolean(errors.email)} error={errors.email?.message}>
            <Controller
              defaultValue=''
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <EuiFieldText
                  icon='email'
                  placeholder='user@gmail.com'
                  value={value}
                  onChange={onChange}
                  aria-label='Enter the email associated with your account.'
                  isInvalid={Boolean(errors.email)}
                />
              )}
            />
          </EuiFormRow>
          <EuiFormRow label='Password' isInvalid={Boolean(errors.password)} error={errors.password?.message}>
            <Controller
              defaultValue=''
              name='password'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <EuiFieldPassword
                  placeholder='••••••••••••'
                  value={value}
                  onChange={onChange}
                  type='dual'
                  aria-label='Enter your password.'
                  isInvalid={Boolean(errors.password)}
                />
              )}
            />
          </EuiFormRow>
          <EuiSpacer />
          <EuiFormRow>
            <EuiButton type='submit' fill fullWidth isLoading={isLoading}>
              Login
            </EuiButton>
          </EuiFormRow>

          <EuiSpacer size='xl' />
          <EuiFormRow>
            <div className='flex w-full justify-between'>
              <Link to='/forgot-password' className=''>
                Forgot Password?
              </Link>
              <div>
                Don't have an account?{' '}
                <Link to='/register' className=''>
                  Register
                </Link>
              </div>
            </div>
          </EuiFormRow>
        </EuiForm>
      </EuiPanel>
    </>
  )
}
