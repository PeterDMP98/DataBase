import { useForm } from "react-hook-form"
import defaultValues from '../utils/defaultValues'
import { useEffect } from "react"
import './styles/formUser.css'

const FormUser = ({createUser, updateInfo, updateUserById, setUpdateInfo, setFormClose,formClose, setNotification, setNotificationName}) => { 
    const {register, handleSubmit, reset} = useForm()

    useEffect(() => {
      reset(updateInfo)
    }, [updateInfo])


    const submit = date => {
        if (updateInfo) {
            setNotificationName(`${updateInfo?.first_name}${updateInfo?.last_name}`)
            updateUserById(updateInfo.id, date)
            setUpdateInfo()
            setNotification("update")
            
        } else {
            createUser(date)
            setNotification("create")
            setNotificationName(`${date?.first_name}${date?.last_name}`)
        }
        reset(defaultValues)
    }

    const handleExit= () =>{
        setFormClose(true)
    }

  return (
    <div className={`form__container ${formClose && 'close'} `}>

    <form className="form" onSubmit={handleSubmit(submit)}>

        <h3 className="form__title">{updateInfo ? `Update user information` : `Create New user`}</h3>

        <span onClick={handleExit} className="form__exit">x</span>

        <div className="form__item">
            <label className="form__label" htmlFor="email">Email</label>
            <input className="form__input" type="email" id='email' {...register('email')} />
        </div>

        <div className="form__item">
            <label className="form__label" htmlFor="password">Password</label>
            <input className="form__input" type="password" id='password' {...register('password')}/>
        </div>

        <div className="form__item">
            <label className="form__label" htmlFor="first_name">First_name</label>
            <input className="form__input" type="text" id='first_name' {...register('first_name')} />
        </div>

        <div className="form__item">
            <label className="form__label" htmlFor="last_name">Last_name</label>
            <input className="form__input" type="text" id='last_name' {...register('last_name')} />
        </div>

        <div className="form__item">
            <label className="form__label" htmlFor="birthday">Birthday</label>
            <input className="form__input" type="date" id='birthday' {...register('birthday')} />
        </div>

        <button onClick={handleExit} className="form__btn">{updateInfo ? `Update` : `Create`}</button>
    </form>
    </div>
  )
}

export default FormUser