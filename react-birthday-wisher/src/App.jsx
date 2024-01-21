import { useEffect, useRef, useState } from 'react'
import './App.css'
import { name } from 'ejs';

function App() {
  
  const [formData, setFormData] = useState({name: ""});
  const [showCard, setshowCard] = useState(false);

  const  handleChange = (event) => {
		const { name, value } = event.target;
    console.log(formData.name);
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	};

  const handleSubmit = (event) => {
    event.preventDefault();
    setshowCard(true);
    //alert(`Name: ${formData.name}`);
  }; 

  return (
    <>
      <form className="max-w-sm mx-auto py-40" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-white">
            Name:
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="name" value={formData.name} onChange={handleChange}/>
          </label>
        </div> 
        <input className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" value="Submit" />
      </form>  
      {
        showCard ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center flex">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="rounded-t-lg h-96 w-full" src="https://static.vecteezy.com/system/resources/previews/000/546/011/original/cute-happy-birthday-greeting-card-vector.jpg" alt="Sunset in the mountains"/>
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">{formData.name},</div>
                <p className="text-white-700 text-base">
                  Here’s wishing you all the very best on your special day. May you be blessed with all the joy you can ever have and be blessed abundantly today, tomorrow, and in the days to come! May you have a fantastic birthday and many more to come.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="rounded-t-lg h-96 w-full" src="https://static.vecteezy.com/system/resources/previews/000/545/672/original/vector-happy-birthday-panda.jpg" alt="Sunset in the mountains"/>
              <div className="px-6 py-4 bg-white">
                <div className="font-bold text-xl mb-2">{formData.name},</div>
                <p className="text-white-700 text-base">
                  I hope you create a memory that becomes your happy place in all the many years yet to come on your birthday. Happy Birthday!
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img className="rounded-t-lg h-96 w-full" src="https://m.media-amazon.com/images/I/61PtNgl1uPL._AC_UF1000,1000_QL80_.jpg" alt="Sunset in the mountains"/>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{formData.name},</div>
                <p className="text-white-700 text-base">
                  May life lead you to great happiness and success on your birthday, and I hope all your wishes come true! May you enjoy your special day!
                </p>
              </div>
            </div>
          </div> 
        ):
        (
          <div className='grid justify-items-center'>
            <h1 className="font-bold text-white text-xl">Enter name to generate your cutomised birthday cards !!!!</h1>
          </div>  
        )
      }
    </>  
  )
}


export default App
