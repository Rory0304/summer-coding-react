import React from "react";

function CreateUser({ username, nickname, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="이름"
        onChange={onChange}
        value={username}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default React.memo(CreateUser);
