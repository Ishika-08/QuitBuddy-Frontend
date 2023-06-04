import './Blogs.css'

export default function NewBlog(){
    return (
    <>
    <div className='newBlogBody'>
    <div>
    <label htmlFor="title" className='label'>Title:</label>
    <input
    name="title"
    type="text"
    className='input'
    />
    </div>
    <label htmlFor="description" className='label'>Description:</label>
    <textarea  
    name="description" 
    placeholder='Write your post here'
    className='input'
    ></textarea>
    <div>
    </div>
    <button>Submit</button>
    </div>
    
    </>)
}