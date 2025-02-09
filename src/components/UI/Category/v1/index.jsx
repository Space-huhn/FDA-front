import {CategoryStyled} from "@/components/UI/Category/v1/styled";
import {Typography} from "@mui/material";
import ImageCover from "@/components/UI/ImageCover";

const Category = ({categoryName, categoryImg, activeCategories, onClick}) => {
  return (
    <CategoryStyled
      className={activeCategories?.includes(categoryName) && 'active'}
      onClick={onClick}
    >
      {
        categoryImg ?
          (<div className='imgWrapper'>
            <ImageCover src={categoryImg} alt={categoryName}/>
          </div>)
          :
          (<div className="image"/>)
      }
      <Typography
        variant="h4"
        color="dark"
      >
        {categoryName}
      </Typography>
    </CategoryStyled>
  )
};

export default Category;