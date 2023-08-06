

const FilmInfo = ({data , info}) => {


    const filteredData = data.filter(item=>item.date === +info)

    const dataObj = filteredData[0]


  return (
    <div className=" right_card pt-3 w-50  ">
            <h1 className="text-primary">{dataObj?.title}</h1>
            <p>{dataObj?.body}</p>
            <p className="text-danger">{dataObj?.tags.join(" $ ")}</p>
            <p>
                <span>{ }</span>
                <span className="text-success">{dataObj?.rate.toFixed(1)}/10</span>
            </p>
            <div className="card p-1 mb-3 " style={{ width: "35vw" }}>
                <img
                    src={dataObj?.img}
                    className="card-img-top img-thumbnail border border-primary card"
                    alt="..."
                />
                <div className="card-body"></div>
            </div>
        </div>
  )
}

export default FilmInfo