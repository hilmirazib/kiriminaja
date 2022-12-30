// flux paradigm
// state
export const state = () => ({
    datas: [],
  });
  
  // getters
  export const getters = {
      getDatas(state){
          return state.datas
      }
  };
  // actions
  // asynhronus when the data retrieved, mutation will mutate the state
  export const actions = {
    async getData(state, commit) {
      // hit API to get users
      const datas = await fetch("/Api/main.json")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
        console.log(datas)
      commit("addData", await datas);
      return datas;
    },
  };
  //mutations
  // synchrons
  export const mutation = {
    addData(state, datas) {
      state.datas.push({ ...datas });
    },
  };
  