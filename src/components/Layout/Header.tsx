import { Fragment } from "react";
import mealsImage from '@/assets/meals.jpeg'
import { StyledHeader, StyledImg, StyledImgDiv } from '@/components/Layout/HeaderStyles'
import HeaderCartButton from "@/components/Layout/HeaderCartButton";

function Header() {
  return (
    <Fragment>
      <StyledHeader>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </StyledHeader>
      <StyledImgDiv>
        <StyledImg src={mealsImage} alt="a lot of food on the table" />
      </StyledImgDiv>
    </Fragment>
  )
}

export default Header;