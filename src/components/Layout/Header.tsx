import React, { Fragment } from 'react';
import mealsImage from '@/assets/meals.jpeg';
import {
  StyledHeader,
  StyledImg,
  StyledImgDiv,
} from '@/components/Layout/HeaderStyles';
import HeaderCartButton from '@/components/Layout/HeaderCartButton';

interface HeaderProps {
  onShowCart: React.MouseEventHandler<HTMLButtonElement>;
}

function Header({ onShowCart }: HeaderProps) {
  return (
    <Fragment>
      <StyledHeader>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </StyledHeader>
      <StyledImgDiv>
        <StyledImg src={mealsImage} alt="a lot of food on the table" />
      </StyledImgDiv>
    </Fragment>
  );
}

export default Header;
