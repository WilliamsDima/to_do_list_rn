import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const PlusSvg = (props) => {
  if (!props.inputFocus) {
    return <Svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} {...props}>
        <Path 
            fill="none"
            stroke={props.color}
            strokeMiterlimit={10}
            strokeWidth={2}
            scale={70/50}
            d="M25 2C12.317 2 2 12.317 2 25s10.317 23 23 23 23-10.317 23-23S37.683 2 25 2zm12 24H26v11h-2V26H13v-2h11V13h2v11h11v2z" />
      </Svg>
  }

  return  <Svg xmlns="http://www.w3.org/2000/svg" width={70} height={70} {...props}>
    <Path 
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={2}
        scale={70/50}
        d="M25 2C12.31 2 2 12.31 2 25s10.31 23 23 23 23-10.31 23-23S37.69 2 25 2zm0 2c11.61 0 21 9.39 21 21s-9.39 21-21 21S4 36.61 4 25 13.39 4 25 4zm9.988 10.988a1 1 0 0 0-.816.451L23.97 30.477 16.68 23.71a1 1 0 1 0-1.36 1.467l8.996 8.347 11.512-16.964a1 1 0 0 0-.84-1.573z" />
    </Svg>
};