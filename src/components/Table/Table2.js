import React,{useState} from 'react'

const Table2 = () => {
    
    const Data=[
        {id:1,name:"deepak",email:"deepak@gmail.com", city:"Muzaffarpur"},
        {id:2,name:"kunal",email:"kunal@gmail.com@gmail.com", city:"Delhi"},
        {id:3,name:"pranay",email:"pranay@gmail.com", city:"Bangalore"},
        {id:4,name:"pushkar",email:"pushkar@gmail.com", city:"Patna"},
        {id:5,name:"raj",email:"raj@gmail.com", city:"Mysore"},
        {id:6,name:"trivedi",email:"trivedi@gmail.com", city:"Mumbai"},
        {id:7,name:"sourav",email:"Sourav@gmail.com", city:"Mumbai"},
        {id:8,name:"sahil",email:"trivedi@gmail.com", city:"Mumbai"},
        {id:9,name:"sanjay",email:"trivedi@gmail.com", city:"Mumbai"},
        {id:10,name:"rahul",email:"trivedi@gmail.com", city:"Mumbai"},
        {id:11,name:"gaurav",email:"trivedi@gmail.com", city:"Mumbai"},
        {id:12,name:"abhishek",email:"trivedi@gmail.com", city:"Mumbai"},
        {id:13,name:"awanish",email:"trivedi@gmail.com", city:"Mumbai"},
    ]
    const [currentPage,setCurrentPage] = useState(1);
    const recordsPerPage=2;
    const lastIndex =currentPage*recordsPerPage;
    const firstIndex=lastIndex-recordsPerPage;
    const records=Data.slice(firstIndex,lastIndex);
    const lastPage =Math.ceil(Data.length/recordsPerPage);
    const numbers =[...Array(lastPage +1).keys()].slice(1);
    // const pageIndex=Array.from({length:lastPage},(_,idx)=>idx+1)
  return (
    <>
    <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>Sr.no</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {records.map((row, index) => (
          <tr key={index}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <nav>
        <ul className='pagination'>
            <li className='page-item'>
                <a href="#" className ={`page-link ${currentPage < 1 ? "disabled" :''}`}  onClick={prevPage}>&lt;</a>
            </li>
            {   
                    numbers.slice(Math.max(0,currentPage-2),Math.min(lastPage,currentPage+3))
                .map((n,i)=>{
                    return(

                    <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                        <a  href="#" className="page-link" onClick={()=>changeCurrentPage(n)} >{n}</a>
                    </li>
                    )
                })
            }
            <li className={`page-item ${currentPage>lastPage-1 ? "disabled" :''}`}>
                <a href="#" className="page-link" onClick={nextPage}>&gt;</a>
            </li>
        </ul>
    </nav>
    </div>
    </>
  )
  function nextPage(){
        if(currentPage !== lastPage){
            setCurrentPage(currentPage+1)
        }
  }
  function prevPage(){
    if(currentPage !== 1){
        setCurrentPage(currentPage-1)
    }
  }
  function changeCurrentPage(id){
        setCurrentPage(id)
  }
}

export default Table2