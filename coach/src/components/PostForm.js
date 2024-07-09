import React from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {

    const [post, setPost] = React.useState({title:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
      }

    return(
            <form>
        {/* управляемый инпут */}
        <MyInput 
          value={post.title} 
          onChange={e => setPost({...post, title:e.target.value})} 
          type="text" 
          placeholder="Название поста" />
        {/* неуправляемый инпут */}
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body:e.target.value})}
          type="text" 
          placeholder="Содержание поста" />

        <MyButton 
          onClick={addNewPost}>
            Создать пост
        </MyButton>
      </form>
    )
}

export default PostForm