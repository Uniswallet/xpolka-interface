import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0xf7c643589e487b3cebb882a6339517271e1d9a39"
      >
        XPolka Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://app.uniswap.org/#/swap?inputCurrency=0xF7C643589e487b3cebb882A6339517271E1d9a39"
      >
        Uniswap XPK-ETH
      </StyledLink>
      <StyledLink target="_blank" href="http://xpolka.medium.com/">
        MEDIUM
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/xpolka_finance">
        TWITTER
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/xPOLKA">
        TELEGRAM
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
