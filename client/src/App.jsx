// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost} from './pages';

const App = () => {
  return (
    <BrowserRouter>
    {/* header ke lie  */}
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        {/* logo ke lie  */}
        <Link to="/">
          <img src={ logo } alt="logo" className='object-contain w-28'/>
        </Link>
        {/* Createpost ka button ke lie  */}
        <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>Create</Link>
      </header>
          {/* nav bar ke neeche ka back ground set krne ke lie  */}
      <main className='sm:p-8 px-4 py-8 w-full bg-[#edfaff] min-h-[calc(100vh-73px)]'> 
        {/* home aur create post pe jaane ke lie as a link isme rounte bnate h  */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create-post' element={<CreatePost />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
