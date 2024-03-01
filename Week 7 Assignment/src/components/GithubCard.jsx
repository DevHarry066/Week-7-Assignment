import { useEffect, useState } from "react"

function GithubCard() {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch("https://api.github.com/users/devharry066")
          .then(async function(res) {
            const json = await res.json(); // Wait for JSON parsing
            console.log(json);
            setUserInfo(json);
          })
          .catch(error => {
            console.error('Error fetching todos:', error);
            // Handle error here, e.g., setTodos([])
          });
      }, []);
  return (
  <div className="flex items-center justify-center min-h-screen bg-slate-100">
  <div className="flex flex-col p-6 m-3 bg-white space-y-10 rounded-2xl shadow-2xl 
  md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
    {userInfo.name}
        </div>
    </div>
  )
}

export default GithubCard