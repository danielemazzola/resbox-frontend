import { useForm } from 'react-hook-form'
import Alert from '../Alert/Alert'
import './Form.css'

const Form = () => {
  const { handleSubmit, register, formState, reset } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      comments: '',
      stadistics: {
        howDidYouHearAboutUs: '',
        mainInterest: '',
        additionalInfo: ''
      }
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
      <div>
        <label htmlFor='comments'>Mensaje</label>
        <textarea
          className={`input ${
            formState.errors.comments?.type === 'required' ? 'error' : ''
          }`}
          id='comments'
          {...register('comments', {
            required: {
              value: true
            },
            minLength: {
              value: 10,
              message: 'Minimo 2 caracteres😙'
            },
            maxLength: {
              value: 256,
              message: 'Máximo 256 caracteres😙'
            }
          })}
        />

        {formState.errors.comments?.message ? (
          <Alert>{formState.errors.comments.message}</Alert>
        ) : null}
      </div>
      <div>
        <label htmlFor='howDidYouHearAboutUs'>¿Cómo nos conociste?</label>
        <select
          className={`input ${
            formState.errors.stadistics?.howDidYouHearAboutUs?.type ===
            'required'
              ? 'error'
              : ''
          }`}
          id='howDidYouHearAboutUs'
          {...register('stadistics.howDidYouHearAboutUs', {
            required: {
              value: false,
              message: 'Este campo es requerido'
            }
          })}
        >
          <option value=''>Selecciona una opción</option>
          <option value='internet'>Internet</option>
          <option value='friend'>Un amigo</option>
          <option value='advertisement'>Publicidad</option>
          <option value='other'>Otro</option>
        </select>
        {formState.errors.stadistics?.howDidYouHearAboutUs?.message && (
          <Alert>
            {formState.errors.stadistics.howDidYouHearAboutUs.message}
          </Alert>
        )}
      </div>
      <div>
        <label htmlFor='mainInterest'>¿Cúal es tu interes principal?</label>
        <select
          className={`input ${
            formState.errors.stadistics?.mainInterest?.type === 'required'
              ? 'error'
              : ''
          }`}
          id='mainInterest'
          {...register('stadistics.mainInterest', {
            required: {
              value: false,
              message: 'Este campo es requerido'
            }
          })}
        >
          <option value=''>Selecciona una opción</option>
          <option value='internet'>Apoyar</option>
          <option value='friend'>Colaborar</option>
          <option value='advertisement'>Fusionar</option>
          <option value='other'>Otro</option>
        </select>
        {formState.errors.stadistics?.mainInterest?.message && (
          <Alert>{formState.errors.stadistics.mainInterest.message}</Alert>
        )}
      </div>

      <div>
        <label htmlFor='additionalInfo'>Información adicional</label>
        <textarea
          className={`input ${
            formState.errors.stadistics?.additionalInfo?.type === 'required'
              ? 'error'
              : ''
          }`}
          id='additionalInfo'
          {...register('stadistics.additionalInfo', {
            required: {
              value: false
            },
            maxLength: {
              value: 256,
              message: 'Máximo 256 caracteres😙'
            }
          })}
        />
        {formState.errors.stadistics?.additionalInfo?.message && (
          <Alert>{formState.errors.stadistics.additionalInfo.message}</Alert>
        )}
      </div>

      <button type='submit' className='btnSubmit'>
        Solicitar información
      </button>
    </form>
  )
}

export default Form
