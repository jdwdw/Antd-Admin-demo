const TodoListAction = (dispatch) => {
  // 定义action
  const Add = { type: 'Add' };
  function Remove(i) {
    return {
      type: 'Remove',
      index: i,
    };
  }

  return {
    handleAdd: () => dispatch(Add),
    handleRemove: i => dispatch(Remove(i)),
  };
};

const LikeAction = (dispatch) => {
  // 定义action
  const change = { type: 'change' };
  return {
    handleClick: () => dispatch(change),
  };
};

const SelectMenuAction = (dispatch) => {
  // 定义action
  // const selectSiderMenu = { type: 'selectSiderMenu' };
  function createSelectMenuAction(index) {
    return { type: 'selectSiderMenu', index };
  }
  return {
    // selectSiderMenu: event => dispatch(createSelectMenuAction(event.key)),
    selectSiderMenu: (event) => {
      console.log(event);
      return dispatch(createSelectMenuAction(event.key));
    },
  };
};

const HomePageToggleAction = (dispatch) => {
  const changeCollapsed = { type: 'changeCollapsed' };
  return { changeCollapsed: () => {
    console.log(changeCollapsed);
    return dispatch(changeCollapsed);
  } };
};

export { TodoListAction, LikeAction, SelectMenuAction, HomePageToggleAction };
