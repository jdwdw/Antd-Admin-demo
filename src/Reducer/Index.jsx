/**
 * 定义所有的Redux 在当前文件 进行导出
 * redux 捕获action 返回新的state
 */

const TodoList = (state = { items: ['hello', 'world', 'click', 'me'] }, action) => {
  let Newstate = null;
  switch (action.type) {
    case 'Add': // 添加
      Newstate = state.items.concat([prompt('Enter some text')]);
      return { items: Newstate };
    case 'Remove': // 删除
      state.items.splice(action.index, 1);
      return { items: state.items };
    default:
      return state;
  }
};

const Like = (state = { like: false }, action) => {
  switch (action.type) {
    case 'change': // 修改
      return { like: !state.like };
    default:
      return state;
  }
};

const SiderMenu = (state = { siderMeunIndex: 0 }, action) => {
  switch (action.type) {
    case 'selectSiderMenu':
      return { siderMeunIndex: action.index };
    default:
      return state;
  }
};
const HomePage = (state = { collapsed: false }, action) => {
  switch (action.type) {
    case 'changeCollapsed': // 修改
      console.log(state.collapsed);
      return { collapsed: !state.collapsed };
    default:
      return state;
  }
};


export default { TodoList, Like, SiderMenu, HomePage };
