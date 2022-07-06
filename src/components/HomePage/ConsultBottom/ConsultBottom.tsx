import Image from 'next/image'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import CheckMarkSVG from '../../../assets/svg/modalCheckMark.svg'

const ConsultBottom = () => {
  const [errors, setErrors] = useState<string[]>([])
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [connectType, setConnectType] = useState<string>('tel')
  const numberRegEpx = /^\+380\(\d{2}\) \d{3}-\d{2}-\d{2}$/

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prevState => !prevState);
  };
  const closeModal = () => {
    setShowModal(prevState => !prevState);
  };

  const validate = (): string[] => {
    const initErrors: string[] = []
    if (name.length < 2) initErrors.push('name')
    if (!numberRegEpx.test(phone)) initErrors.push('phone')
    setErrors([...initErrors])
    return initErrors
  }

  const handleSend = async (e: any) => {
    e.preventDefault()
    // if (validate().length == 0) {
    // }
    openModal()

    //   const data = {
    //     title: 'Форма: Консультація з експертом',
    //     name,
    //     phone,
    //     type: connectType,
    //   };

    //   const JSONdata = JSON.stringify(data)

    //   const endpoint = '/api/tg_bot'

    //   const options = {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSONdata
    //   }

    //   const response = await fetch(endpoint, options)

    //   const result = await response.json()

    //   if (result.status === 200) {
    //     setName('')
    //     setPhone('')
    //   }
    // }
  }

  return (
    <section className='consultBottom'>
      <div className="container consultBottom__container">
        <div className="consultBottom__container--bg"></div>
        <div className="consultBottom__text">
          <h2 className="pre-title consultBottom__title">у вас залишилися питання?</h2>
          <p className="consultBottom__description section__text">
            Залиште контакт, наш експерт точно відповість на них!
          </p>
        <div className="consultBottom__image">
            <Image
              className=""
              src="/assets/images/details-consult.png"
              layout="fill"
              objectFit="cover"
              alt='car'
              />
          </div>
        </div>
        <form className="consultBottom__form">
        <div className="consultBottom__form__input-wrapper">
        <span className="consultBottom__form__thumb">
          <input 
          className={`consultBottom__form-input ${
          errors.includes('name') ? 'consultBottom__form-input--error' : ''
          }`}
          placeholder="Ваше ім’я"
          value={name}
          onChange={(e) => setName(e.target.value)} 
          />
        </span>
        <span className="consultBottom__form__thumb">
          <input
          type="text"
          className={`consultBottom__form-input ${
            errors.includes('phone') ? 'consultBottom__form-input--error' : ''
          }`}
          placeholder="Ваш телефон"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
        </span>
      </div>
      <div className="consultBottom__form-checkbox-wrappers">
        <div className="consultBottom__form-checkbox-wrapper">
          <input
            id="tel"
            name="tel"
            type="radio"
            className="consultBottom__form-checkbox"
            onChange={() => setConnectType('tel')}
            checked={connectType === 'tel'}
          />
          <label className="consultBottom__form-label" htmlFor="tel">
            Дзвінок
          </label>
        </div>
        
        <div className="consultBottom__form-checkbox-wrapper">
          <input
            type="radio"
            id="telegram"
            name="telegram"
            className="consultBottom__form-checkbox"
            onChange={() => setConnectType('telegram')}
            checked={connectType === 'telegram'}
          />
          <label className="consultBottom__form-label" htmlFor="telegram">
            Telegram
          </label>
        </div>
        <div className="consultBottom__form-checkbox-wrapper">
          <input
            type="radio"
            id="viber"
            name="viber"
            className="consultBottom__form-checkbox"
            onChange={() => setConnectType('viber')}
            checked={connectType === 'viber'}
          />
          <label className="consultBottom__form-label" htmlFor="viber">
            Viber
          </label>
        </div>
      </div>
      <button className="consultBottom__form-btn" onClick={handleSend}>
        Відправити
      </button>
        </form>
      </div>
      {showModal && (
          <Modal onClose={closeModal}>
              <div className="consult__modal">
                  <div className="consult__modal__svg"><CheckMarkSVG/></div>
                  <h1 className="consult__modal__title">Дякуємо!</h1>
                  <h2 className='consult__modal__pre-title'>дані успішно відправлені</h2>
                  <p className='consult__modal__text'>Ми зв'яжемося з вами найближчим часом!</p>
              </div>
          </Modal>
        )}
    </section>
  )
}

export default ConsultBottom