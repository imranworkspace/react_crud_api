import Delete from './services/Delete'
import Get from './services/Get'
import Post from './services/Post'
import Put from './services/Put'

const App = () => {
  return (
    <div>
      <h1>please check your console for GET api response</h1>
      <Get />
      <h1>please check your console for POST api response</h1>
      <Post />
      <h1>please check your console for PUT api response</h1>
      <Put />
      <h1>please check your console for DELETE api response</h1>
      <Delete />
    </div>
  )
}

export default App
