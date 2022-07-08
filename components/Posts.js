import Post from './Post'

const posts = [
  {
    id: 1,
    username: 'dominnumb',
    userImg: 'https://images3.alphacoders.com/853/thumb-1920-85329.jpg',
    img: 'https://images3.alphacoders.com/853/thumb-1920-85329.jpg',
    caption: 'This is dope',
  },
  {
    id: 2,
    username: 'asdasda',
    userImg: 'https://images3.alphacoders.com/853/thumb-1920-85329.jpg',
    img: 'https://images3.alphacoders.com/853/thumb-1920-85329.jpg',
    caption: 'This is dope',
  },
  {
    id: 3,
    username: 'HAHA',
    userImg: 'https://images3.alphacoders.com/853/thumb-1920-85329.jpg',
    img: 'https://images3.alphacoders.com/853/thumb-1920-85329.jpg',
    caption: 'This is dope',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}
export default Posts
