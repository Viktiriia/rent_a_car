import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 426px;

  .img-warpper {
    position: relative;
    width: 100%;
    margin-bottom: 14px;
    border-radius: 14px;
    justify-content: center;

    display: flex;

    img {
      width: 600px;
      object-fit: cover;
    }
  }
  .title {
    margin-bottom: 8px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    color: black;
  }
  .short-info {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 14px;
    color: gray;
  }

  .descriptions {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 20px;
  }

  .accessories {
    margin-bottom: 24px;
  }

  .conditions {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .model {
    color: #3470ff;
  }

  .descr {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    font-size: 12px;
    color: gray;
  }
`;
export const Button = styled.a`
  padding: 10px 10px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  font-size: 14px;
  font-weight: 700;
  border-radius: 15px;
  width: 70%;
  display: flex;
  color: white;
  background: blue;
`;
