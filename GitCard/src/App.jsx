import { useEffect, useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '150px'}}>
        <CardComponent/>
      </div>  
    </>
  )
}

function CardComponent()
{
  const [imgurl, setimgurl] = useState("");
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [url, seturl] = useState("");
  const [followers, setfollowers] = useState(0);
  const [following, setfollowing] = useState(0);
  const [repos, setrepos] = useState(0);

  useEffect(() => {
    fetch('https://api.github.com/users/hkirat')
    .then(response => response.json())
    .then(data => {
      setimgurl(data.avatar_url),
      setname(data.name),
      setusername(data.login),
      seturl(data.url),
      setfollowers(data.followers),
      setfollowing(data.following),
      setrepos(data.public_repos)
    })
  },[])

  return <div style={{boxShadow: '0 4px 8px 0 rgba(0,0,0.5,1)', width: '18%', padding: '30px'}}>
    <img src={imgurl} style={{borderRadius: '100%', height:'250px', width: '100%'}}></img>
    <div className='container' style={{padding: '2px 16px', display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
      <h2><b>{name}</b></h2> 
      <h4>Username : {username}</h4>
      <a href={url} style={{marginBottom: '15px'}}>Click to visit profile</a>
      <div className='container' style={{display:'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#cccccc', borderRadius: '15px'}}>
          <div style={{display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '10px'}}>
              <p><b>{followers}</b></p>
              <p><b>Followers</b></p>
          </div>
          <div className='container' style={{display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '10px'}}>
              <p><b>{following}</b></p>
              <p><b>Following</b></p>
          </div>
          <div className='container' style={{display:'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '10px'}}>
              <p><b>{repos}</b></p>
              <p><b>Repositories</b></p>
          </div>
      </div> 
    </div>
  </div>
}

export default App
