import { fetchPost } from "./api"
import { deletePost } from "./api"
import { createPost } from "./api"

const arrThunk = [createPost, deletePost, fetchPost]
export const thunkFunction = (type)=>arrThunk.map(el=>el[type])
export const handlePending = (state) => {
  state.isLoading = true
}
export const handleRejected = (state, action) => {
  state.isLoading = false
  state.error = action.payload
}
export const handleFulfilled = (state) => {
  state.isLoading = false
  state.error = ''
}
   export const handleFulfilledGet = (state, action) => {
      state.items = action.payload
    }
  export const handleFulfilledCreate = (state, action) => {
      state.items.push(action.payload)
        }
  export  const handleFulfilledDelete = (state, action) => {
      state.items = state.items.filter(item => item.id!==action.payload.id)
    }