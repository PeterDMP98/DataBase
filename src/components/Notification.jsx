import './styles/notification.css'

const Notification = ({ notification, notificationName, setNotification, setNotificationName }) => {

    const accept = () => {
        setNotification()
        setNotificationName()
    }

    return (
        <>
            {
                notification == "create"
                    ? <div className='notification__container'>
                        <div className="notification">
                            <h2 className="notification__title">Crear Usuario</h2>
                            <p className="notification__info">El usuario <span className='notification__name'>{notificationName}</span> se ha Creado</p>
                            <button onClick={accept} className="notification__btn">Acepta</button>
                        </div>
                    </div>

                    : notification == "update"
                        ? <div className='notification__container'>
                            <div className="notification">
                                <h2 className="notification__title">Actulizar Usuario</h2>
                                <p className="notification__info">El usuario <span className='notification__name'>{notificationName}</span> se ha Actulizado</p>
                                <button onClick={accept} className="notification__btn">Acepta</button>
                            </div>
                        </div>

                        : notification == "delete"
                            ? <div className='notification__container'>
                                <div className="notification">
                                    <h2 className="notification__title">Eliminar Usuario</h2>
                                    <p className="notification__info">El usuario <span className='notification__name'>{notificationName}</span> se ha eliminado</p>
                                    <button onClick={accept} className="notification__btn">Acepta</button>
                                </div>
                            </div>

                            : <div></div>
            }

        </>

    )
}

export default Notification