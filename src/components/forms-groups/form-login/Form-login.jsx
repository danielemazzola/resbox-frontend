import { useForm } from 'react-hook-form'
import Alert from '../alert/Alert'
import './Form-login.css'

const FormLogin = () => {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: ''
    }
  })
  const onSubmit = (values) => {
    //AQUI MI FUNCION o FETCH O LO QUE HAGA
    console.log(values)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='formGroup'>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          className={`input ${
            formState.errors.name?.type === 'required' ? 'error' : ''
          }`}
          id='name'
          {...register('name', {
            required: {
              value: true
            },
            minLength: {
              value: 4,
              message: 'Minimo 4 caracteres😙'
            }
          })}
        />

        {formState.errors.name?.message ? (
          <Alert>{formState.errors.name.message}</Alert>
        ) : null}
      </div>
      <div>
        <label htmlFor='phone'>phone</label>
        <input
          className={`input ${
            formState.errors.phone?.type === 'required' ? 'error' : ''
          }`}
          id='phone'
          {...register('phone', {
            required: {
              value: true
            },
            minLength: {
              value: 9,
              message: 'Minimo 9 caracteres😙'
            }
          })}
        />
        {formState.errors.phone?.message ? (
          <Alert>{formState.errors.phone.message}</Alert>
        ) : null}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          className={`input ${
            formState.errors.email?.type === 'required' ? 'error' : ''
          }`}
          id='email'
          {...register('email', {
            required: {
              value: true
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'El formato no es valido😢'
            }
          })}
        />
        {formState.errors.email?.message ? (
          <Alert>{formState.errors.email.message}</Alert>
        ) : null}
      </div>
      <button type='submit' className='btnSubmit'>
        Quiero darme de alta
      </button>
    </form>
  )
}

export default FormLogin
