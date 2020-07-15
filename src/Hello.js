import React from "react";

//만약 내용이 바뀌어야 하면 삼항 연산자를 사용하고, 간단하게 둘 중 하나를 표현하고 싶으면 &&를 사용함.
function Hello({ color, name, isSpecial }) {
  return (
    <div
      style={{
        color: color
      }}
    >
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름 없음"
};

export default Hello;
