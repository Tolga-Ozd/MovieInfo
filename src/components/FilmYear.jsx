const FilmYear = ({data , setInfo}) => {

  return (
    <div className="d-flex flex-column">
        {
        data.map( item => 
        <button onClick={()=>setInfo(item.date)}
        role="button" className="border-0 shadow fs-5 fw-bold text-secondary border-bottom border-warning border-3  mb-2 rounded-2 p-2 btn btn-outline-info"  key={item.id}>{item.date}</button> )
        }
    </div>
  )
}

export default FilmYear