import styled from "styled-components";

export const StyledMediaBackgrounContainer = styled.div<{backgroundMedia: string}>`
  background-image: url(${({backgroundMedia}) => backgroundMedia });
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`