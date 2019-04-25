import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Wrapper, Title, FlexWrapper, Checkbox, Text, LeanText, ErrorText, Input, InputDigit, Button, CouponWrapper, CouponInfo, CouponDiscount } from './styles';
import { VALIDATE_COUPON_REQUEST } from '../store/actionTypes';

const regex = new RegExp('^\\d{0,19}$');

const DiscountForm = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [digit, setDigit] = useState('');
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);

  const { fetching, coupons, error, onRequestCoupon } = props;

  useEffect(() => {
    setIsValid(digit.length === 19 && code);
  }, [digit, code]);

  const inputChangeHandler = value => {
    const trimmedValue = value.trim();
    if (regex.test(trimmedValue)) {
      setDigit(trimmedValue);
    }
  }

  const content = (showForm) => {
    if (showForm) {
      return (
        <>
          <LeanText>Please enter the 19-digit number and code from your gift card below.</LeanText>
          {
            coupons.map((coupon, index) => (
              <CouponWrapper key={index}>
                <CouponInfo>
                  <Text>Gift Card</Text>
                  <LeanText>**** **** **** **** {coupon.digit.slice(16)}</LeanText>
                </CouponInfo>
                <CouponDiscount>
                  {coupon.discount}
                </CouponDiscount>
              </CouponWrapper>
            ))
          }
          <FlexWrapper>
            <InputDigit
              value={digit}
              onChange={(e) => inputChangeHandler(e.target.value)}
              placeholder="Gift Card Number"
            />
            <Input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Control Code"
            />
          </FlexWrapper>
          {error ? <ErrorText>{error}</ErrorText> : ''}
          <Button
            isActive={isValid && !fetching}
            onClick={() => onRequestCoupon(code, digit)}
          >
            APPLY
          </Button>
        </>
      );
    } else {
      return '';
    }
  }

  return (
    <Wrapper>
      <Title>Gift Card</Title>
      <FlexWrapper>
        <Checkbox onClick={() => setShowForm(!showForm)} />
        <Text>Do you have a gift card?</Text>
      </FlexWrapper>
      {content(showForm)}
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    coupons: state.coupons,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestCoupon: (code, digit) => dispatch({ type: VALIDATE_COUPON_REQUEST, code, digit })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscountForm);
