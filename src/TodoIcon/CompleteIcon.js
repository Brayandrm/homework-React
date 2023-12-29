import React from 'react';
// import "./index.js";
import { TodoIcon } from './index.js';

function CompleteIcon ( { completed, onComplete } ) {
  return (
    <TodoIcon
      type="check"
      color = { completed ? "green" : "gray" }
      onClick = {onComplete}
    />
  );
}

export { CompleteIcon };
 