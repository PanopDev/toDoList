function HeaderContent({headerText}){
   
return (
<header>
<h1>{headerText}</h1>

</header>
)
}
HeaderContent.defaultProps = {headerText:"My List"}


export default HeaderContent