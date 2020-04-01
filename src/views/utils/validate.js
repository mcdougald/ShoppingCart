export const validateRegisterForm = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Choose a valid username'
  } else if (values.username ? values.username.length > 20 : false) {
    errors.username = "Your username cannot exceed 20 characters";
  }

  if (!values.password) {
  errors.password = "Choose a valid password";
  } else if (values.password ? values.password.length < 8 : false) {
    errors.password = "Password must be 8 characters or more";
  }

  if (!values.retype_password) {
  errors.retype_password = "Retype password";
  } else if (values.password !== values.retype_password) {
    errors.retype_password = "Passwords do not match.";
  }

  return errors;
};

const isValidCreditCardNumber = (value) =>
  (/^4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}$/i.test(value));

const isValidCreditCardCVC =
  (value) =>
    (!(!/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/i
      .test(value) || value.toString().length < 3 || value.toString().length > 3));

export const validateNewPaymentForm = values => {
  const errors = {};
  if (!values.cardNumber) {
    errors.cardNumber = 'Please enter a valid credit card number.';
  } else if ( !isValidCreditCardNumber(values.cardNumber)) {
    errors.cardNumber = 'Invalid Credit Card Number';
  }

  if (!values.cardName) {
    errors.cardName = 'Full Name on Card is Required'
  }

  if (!values.cardValidDate) {
    errors.cardValidDate = 'Card Expiration Date is Required'
  }

  if (!values.cardCVV) {
    errors.cardCVV = 'Card CVV code is Required'
  } else if ( !isValidCreditCardCVC(values.cardCVV)) {
    errors.cardCVV = 'Invalid CVV Code'
  }

  return errors;
};

/*
accountInformationForm: {
  firstName: {
    type: 'input',
      label: null,
      gridAreaLocation: '1 / 1 / span 1 / span 2',
      fieldConfig: {
      name: 'FirstName',
        type: 'text',
        placeholder: 'First Name'
    },
    value: '',
      validity: {
      required: true,
        pattern: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
    },
    valid: false,
      touched: false
  },
  lastName: {
    type: 'input',
      label: null,
      gridAreaLocation: '1 / 3 / span 1 / span 3',
      fieldConfig: {
      name: 'LastName',
        type: 'text',
        placeholder: 'Last Name'
    },
    value: '',
      validity: {
      required: true,
        pattern: /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
    },
    valid: false,
      touched: false
  },
  phone: {
    type: 'input',
      label: null,
      gridAreaLocation: '2 / 1 / span 1 / span 2',
      fieldConfig: {
      name: 'Phone',
        type: 'tel',
        placeholder: 'Primary Phone'
    },
    value: '',
      validity: {
      required: true,
        pattern: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
    },
    valid: false,
      touched: false
  },
  email: {
    type: 'input',
      gridAreaLocation: '2 / 3 / span 1 / span 3',
      label: null,
      fieldConfig: {
      name: 'Email',
        type: 'email',
        placeholder: 'Email'
    },
    value: '',
      validity: {
      required: true,
        pattern: /\S+@\S+\.\S+/
    },
    valid: false,
      touched: false
  },
  addressLine1: {
    type: 'input',
      label: 'Address Line 1:',
      gridAreaLocation: '3 / 1 / span 1 / span 5',
      fieldConfig: {
      name: 'Address1',
        type: 'text',
        placeholder: 'Street Address'
    },
    value: '',
      validity: {
      required: true,
        pattern: /^\s*\S+(?:\s+\S+){2}/
    },
    valid: false,
      touched: false
  },
  addressLine2: {
    type: 'input',
      label: 'Address Line 2:',
      gridAreaLocation: '4 / 1 / span 1 / span 5',
      fieldConfig: {
      name: 'Address2',
        type: 'text',
        placeholder: 'Apt, Suite, Bldg'
    },
    value: '',
      validity: {
      pattern: /^[a-zA-Z0-9\s,.'-]{3,}$/
    },
    valid: false,
      touched: false
  },
  city: {
    type: 'input',
      label: 'City:',
      gridAreaLocation: '5 / 1 / span 1 / span 2',
      fieldConfig: {
      name: 'City',
        type: 'text',
        placeholder: 'City'
    },
    value: '',
      validity: {
      required: true,
        pattern: /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
    },
    valid: false,
      touched: false
  },
  state: {
    type: 'select',
      label: 'State:',
      gridAreaLocation: '5 / 3 / span 1 / span 2',
      fieldConfig: {
      options: LOCATION_OPTIONS
    },
    value: '',
      validity: {
      required: true,
        pattern: /^[.]/
    },
    valid: false,
      touched: false
  },
  zipcode: {
    type: 'input',
      label: 'Zip Code:',
      gridAreaLocation: '5 / 5 / span 1 / span 1',
      fieldConfig: {
      name: 'ZipCode',
        type: 'text',
        placeholder: 'Zip Code'
    },
    value: '',
      validity: {
      required: true,
        pattern: /(^\d{5}$)|(^\d{5}-\d{4}$)/
    },
    valid: false,
      touched: false
  }
},
submitted: false
};*/
