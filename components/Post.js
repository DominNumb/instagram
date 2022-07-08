function Post({ username, id, userImg, img, caption }) {
  return (
    <div>
      <div>
        <img src={userImg} alt="profile pic" />
        <p>{username}</p>
      </div>
    </div>
  )
}
export default Post
