const FilmInfo = ({data , info}) => {

    const filteredData = data.filter(item=>item.date === info)

    const dataObj = filteredData[0]

  return (
    <div className="right_card pt-1 w-75 d-flex">
            <div>
                <h1 className="text-primary">{dataObj?.title}</h1>
                <p>{dataObj?.body}</p>
                <p className="text-danger">{dataObj?.tags.join(" $ ")}</p>
                <p>
                    <span>{dataObj.rate < 6 ? "⭐⭐⭐" : dataObj.rate < 8 ? "⭐⭐⭐⭐" : dataObj.rate > 8 ? "⭐⭐⭐⭐⭐" : ""} </span>
                    <span className="text-success">{dataObj?.rate.toFixed(1)}/10</span>
                </p>
            </div>
            <div className=" p-1 mb-3 " style={{ width: "500px" }}>
                <img
                    width={"400px"}
                    src={dataObj?.img}
                    className=""
                    alt="..."
                />
            </div>
        </div>
  )
}

export default FilmInfo