import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useUserCrud from './hooks/useUserCrud'
import Notification from './components/Notification'
import Loading from './components/Loading'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true)

  /*notification */
  const [notification, setNotification] = useState()
  const [notificationName, setNotificationName] = useState()

  const {
    users,
    hasError,
    getAllUser,
    createUser,
    deleteUserById,
    updateUserById
  } = useUserCrud()


  useEffect(() => {
    getAllUser()
  }, [])

  const handleOpenForm = () => {
    setFormClose(false)
  }


  return (
    <div className='app'>
      {
        users 
        ? 
        <>
        
      <Notification
        notification={notification}
        notificationName={notificationName}

        setNotification={setNotification}
        setNotificationName={setNotificationName}
      />

      <header className='app_header'>
        <h1 className='app_title'>Users</h1>
        <button onClick={handleOpenForm} className='app_btn'>Create new user</button>
      </header>

      <FormUser
        createUser={createUser}
        updateUserById={updateUserById}
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
        setFormClose={setFormClose}
        formClose={formClose}

        setNotification={setNotification}
        setNotificationName={setNotificationName}
      />


      <div className='app_user-container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}

              setNotification={setNotification}
              setNotificationName={setNotificationName}
              setFormClose={setFormClose}
            />
          ))
        }
      </div>
        </> 
        : <Loading/>
      }

    </div>
  )
}

export default App
