import { useDispatch } from 'react-redux'
import { addBlog } from '../reducers/blogs'
import { useNotification, useField } from '../hooks/index'


const BlogForm = ({ hideMe }) => {
  const title = useField('text')
  const author = useField('text')
  const url= useField('text')

  const dispatch = useDispatch()
  const notifyWith = useNotification()

  const handleSubmit = async (event) => {
    event.preventDefault()

    notifyWith(`A new blog '${title.value}' by '${author}' added`)
    dispatch(addBlog({
      title: title.value,
      author: author.value,
      url: url.value
    }))
    hideMe()
  }

  return (
    <div>
      <h4>Create a new blog</h4>

      <form onSubmit={handleSubmit}>
        <div className="grid-two-columns"> {/* Replace GridTwoColumns with a CSS class */}
          <div>title</div>
          <div>
            <input
              id="title"
              placeholder="title"
              {...title}
            />
          </div>
          <div>author</div>
          <div>
            <input
              id="author"
              placeholder="author"
              {...author}
            />
          </div>
          <div>url</div>
          <div>
            <input
              id="url"
              placeholder="url"
              {...url}
            />
          </div>
        </div>

        <button style={{ marginBottom: 10 }} type="submit">create</button> {/* Replace SmallButton with button */}
      </form>
    </div>
  )
}

export default BlogForm
