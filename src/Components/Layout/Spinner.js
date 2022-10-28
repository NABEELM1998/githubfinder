import spinner from './assets/74H8.gif';
const Spinner = () => {
    return (
        <div className='w-100 mt-20'>
            <img src={spinner} alt='loading...' width={180} className = 'text-center mx-auto'></img>
        </div>
    )
}
export default Spinner;