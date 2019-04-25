import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 432px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
`;

export const Title = styled.h4`
  font-weight: 500;
  font-size: 14px;
  margin: 0;
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const Checkbox = styled.input.attrs(() => ({ type: 'checkbox' }))`
  margin: 0 10px 0 0;
`;

export const Text = styled.span`
  font-size: 12px;
`;

export const LeanText = styled(Text)`
  font-weight: 300;
  color: #666666;
  margin-top: 5px;
`;

export const ErrorText = styled(LeanText)`
  color: #d61919;
`;

export const Input = styled.input.attrs(({ placeholder }) => ({ type: 'text', placeholder }))`
  border: 1px solid #CCCCCC;
  box-sizing: border-box;
  padding: 15px 10px;
  font-size: 12px;
  width: 100px;
`;

export const InputDigit = styled(Input)`
  margin-right: 10px;
  width: 310px;
`;

export const Button = styled.button.attrs(({ isActive }) => ({ disabled: !isActive }))`
  background: #333333;
  cursor: ${props => props.isActive ? 'pointer' : 'not-allowed'};
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  color: #FFFFFF;
  padding: 10px 15px;
  margin-top: 10px;
  width: 140px;
  border: none;
`;

export const CouponWrapper = styled.div`
  display: flex;
  background-color: #F2F2F2;
  padding: 10px;
  margin-top: 15px;
`;

export const CouponInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CouponDiscount = styled.div`
  font-weight: bold;
  font-size: 12px;
  margin: auto;
`;