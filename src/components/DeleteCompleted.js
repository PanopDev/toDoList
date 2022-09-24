export default function DeleteCompleted({buttonText,buttonFunction}) {

  return (
    
      <button
      onClick ={()=>{{buttonFunction()}}}
      >{buttonText}</button>
    
  )
}
