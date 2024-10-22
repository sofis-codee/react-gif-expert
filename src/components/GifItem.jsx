

export const GifItem = ({title, url, id}) => {
console.log({title,url, id})
  
    return (
    <div className = "card">
        {/*si por alguna razon no se muestera el url el texto alternativo sería el title*/}
        <img src = {url} alt = {title}/>
        <p>{ title } </p>
        </div>
  )
}

