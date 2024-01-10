// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {each} = props
  const {title, description, publishedDate} = each
  return (
    <div className="each-history-card">
      <div className="num-date-card">
        <h1 className="history-heading">{title}</h1>
        <p className="history-date">{publishedDate}</p>
      </div>
      <p className="history-para">{description}</p>
    </div>
  )
}

export default BlogItem
