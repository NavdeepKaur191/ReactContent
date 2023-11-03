export const reducer=(state,action) =>
{
    if(action.type==="buy_ingredients") return {money: state.money-10};
    if(action.type==="sell_a_meal") return {money: state.money+10};
    return state;
}