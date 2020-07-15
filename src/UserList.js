import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
  //컴포너느가 mount, 나타날때.
  useEffect(() => {
    console.log("user 값이 설정됨");
    console.log(user);
    return () => {
      console.log("user 값이 바뀌기 전");
      console.log(user);
    };
  }, [user]);
  //[] => depedency, 의존되는 값. 비어있으면 컴포넌트가 처음 화면에 나타날때만 실행함
  //만약에 deps가 설정되어 있다면 그 deps가 바뀔때마다 실행됨
  return (
    <div>
      <b
        onClick={() => onToggle(user.id)}
        style={{ color: user.active ? "green" : "black", cursor: "pointer" }}
      >
        {user.username}
      </b>
      <span>{user.nickname}</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

//onRemove와 onToggle이 리렌더링 방지가 되었기 때문에, memo에서 nextProps와 prevProps 설정을 해준다.
export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users
);
