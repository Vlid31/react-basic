import './Post.css'
const Post = (props) => {
    const {id, title, body, userid} = props
    return(
    <div className='post'>
        <small>{id}</small>
        <h2>{title}</h2>
        <p>{body}</p>
        <h3>{userid}</h3>
    </div>
    );
};

export default Post;