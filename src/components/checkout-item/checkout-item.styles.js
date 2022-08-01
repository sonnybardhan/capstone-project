import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const QuantitySpan = styled.span`
  display: flex;
  width: 23%;

  display: flex;

  .arrow {
    cursor: pointer;
  }

  .value {
    margin: 0 10px;
  }
`;

export const NameSpan = styled.span`
  width: 23%;
`;
export const PriceSpan = styled.span`
  width: 23%;
`;

export const ValueSpan = styled.span`
  margin: 0 10px;
`;

export const ArrowDiv = styled.div`
  cursor: pointer;
`;

export const RemoveBtnContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
