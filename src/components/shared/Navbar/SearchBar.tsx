import {Search} from 'lucide-react'

const SearchBar = () => {
  return (
    <div className="bg-secondary w-[30vw] h-11 flex items-center gap-2 font-hubot rounded-full p-2 border">
        <Search size={20} className='text-muted-foreground'/>
        <input type="text" placeholder={`Try searching "Insights"`} className="w-full text-sm font-medium placeholder:font-hubot outline-none"/>
    </div>
  )
}
    
export default SearchBar