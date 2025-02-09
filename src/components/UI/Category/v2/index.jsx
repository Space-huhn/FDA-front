import {CategoryStyled} from "@/components/UI/Category/v2/styled";
import {Typography} from "@mui/material";
import SmallCart from "@/components/UI/SmallCart";

const Category = ({categoryName, categoryImg, activeCategories, onClick}) => {
  return (
    <CategoryStyled
      className={activeCategories?.includes(categoryName) && 'active'}
      onClick={onClick}>

      <SmallCart image={categoryImg}>
        <div className='title'>
          <Typography
            variant="h4"
            color="dark"
          >
            {categoryName}
          </Typography>
        </div>

        <div className="starting">
          <Typography variant="subtitle3" color="main">
            Starting
          </Typography>
          <Typography variant="h4" color="dark">
            $70
          </Typography>
        </div>
      </SmallCart>
    </CategoryStyled>
  )
};

export default Category;