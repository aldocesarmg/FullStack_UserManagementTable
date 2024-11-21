import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCog, faPlus } from '@fortawesome/free-solid-svg-icons';
import { UsersTable } from './components/UsersTable';
import { AddUserModal } from './components/AddUser';
//require("./mongo/connection");

function App() {
  return (
    <div className="App m-10">
      <main className='container mx-auto p-4 font-heebo text-xl font-light bg-slate-100 shadow-xl rounded-lg'>
        <div className='flex justify-between'>
          <div className='flex gap-x-5 w-full'>
            <h2 className='p-1 mx-1 text-gray-500'>All users: 
              <span className='font-medium text-black'>762</span></h2>
            <h2 className='p-1 mx-1 text-gray-500'>Projects: 
              <span className='font-medium text-black'>4381</span></h2>
            <button className='text-gray-500'>
              <FontAwesomeIcon icon={faInfoCircle} /></button>
          </div>
          <div>
            <button className='w-max p-1 mx-1 text-gray-700'>
              <FontAwesomeIcon icon={faCog} className='mx-2'/>Table settings</button>
          </div>
        </div>
        <div className='flex justify-between w-full flex-wrap my-3 text-base'>
          <div>
            <AddUserModal />
          </div>
          <div>
            <button className='bg-slate-300 p-1 mx-1'>Suspend All</button>
            <button className='bg-slate-300 p-1 mx-1'>Archive All</button>
            <button className='bg-slate-300 p-1 mx-1'>Delete All</button>
          </div>
        </div>
        <div>
          <UsersTable />
        </div>
        <div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
