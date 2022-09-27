export default function DeleteCompleted({buttonText,buttonFunction}) {

  return (
    
      <button className="deleteAllButtons"
      onClick ={()=>{{buttonFunction()}}}
      >{buttonText}</button>
    
  )
}
