import React from 'react'
import PropTypes from 'prop-types'
import BrandCardContainer from './Card'
import BrandCardImage from './Image'
import BrandCardLogo from './Logo'
import BrandRegistrationButton from './RegistrationButton'
import cookImage from '../../assets/img/icons/cooking.svg'
import chefHat from '../../assets/img/icons/chef.svg'

const Invitation = ({ text }) => (
  <BrandCardContainer>
    <BrandCardImage image={cookImage} thumb={cookImage} resizeMethod='scale-down' />
    <BrandCardLogo image={chefHat} thumb={chefHat} resizeMethod='scale-down' />
    <div className='brandCard__description brandCard__description--invitation'>
      <p className='brandCard__name'>{text}</p>
      <div style={{ marginTop: 30 }} className='brandCard__description_two_columns'>
        <p className='brandCard__registration_feed'>¡Es gratis!</p>
        <BrandRegistrationButton />
      </div>
    </div>
  </BrandCardContainer>
)

Invitation.propTypes = {
  text: PropTypes.string.isRequired
}

Invitation.defaultProps = {
  text: 'Tu restaurante aquí'
}

export default Invitation
