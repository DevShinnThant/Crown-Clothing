import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer, Preview, Title } from './category-preview.styles';

const CategoryPreview = ({title,products}) => {
    return (
        <CategoryPreviewContainer key={title} >
          <h2>
            <Title to={title} >{title.toUpperCase()}</Title>
          </h2>
          <Preview>
            {
             products.filter((_,index) => index < 4 ).map((product) => {
               return <ProductCard key={product.id} product={product}/>
             })
            }
          </Preview>
        </CategoryPreviewContainer>
    )
}
export default CategoryPreview;