// import React from 'react'
// import {Button} from 'antd'

// const ButtonComponent = ({size, styleButton, styleTextButton, textButton, ...rests}) => {
//     return (
//         <Button
//             size={size}
//             style={styleButton}
//             {...rests}
//         >
//             <span style={styleTextButton}>{textButton}</span>
//         </Button>
//     )
// }
// export default ButtonComponent

import { Button } from "antd";
import React from "react";

const ButtonComponent = ({
  size,
  styleButton,
  styleTextButton,
  textbutton,
  disabled,
  ...rests
}) => {
  return (
    <Button
      style={{
        ...styleButton,
        //background: disabled ? "#ccc" : styleButton.background,
      }}
      size={size}
      {...rests}
    >
      <span style={styleTextButton}>{textbutton}</span>
    </Button>
  );
};

export default ButtonComponent;