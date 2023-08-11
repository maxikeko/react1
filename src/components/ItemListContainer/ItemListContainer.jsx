import Card from "../Card/Card"
import FlexWrapper from "../FlexWrapper/FlexWrapper"
export default function ItemListContainer() {
  return (
    <div>
      <FlexWrapper>
        <Card title= "UX/UI" detail=" Aprende a diseñar paginas web" precio="100.000" img="https://www.datocms-assets.com/14946/1633281680-ux-vs-ui-cover-edited.png?auto=format&fit=max&w=1200"/>
        <Card title= "Javascript" detail=" Aprende a aplicar la logica de programacion" precio="150.000" img="https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/que-es-javascript-descubre-sus-5-principales-usos.jpg"/>
        <Card title= "React" detail=" Aprende a optimizar javascript" precio="200.000" img="https://res.cloudinary.com/practicaldev/image/fetch/s--fced_LNQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1zg83mt0lo13dfmff1cr.png"/>
      </FlexWrapper>
       
    </div>
  )
}
