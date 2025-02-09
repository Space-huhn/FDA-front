import styled from "@emotion/styled";

export const ListBandStyled = styled("div")(({theme:{pallet, breakpoints}}) => ({
  width: '100%',
  margin: '30px 0',

  ".categoryHeader": {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    margin: '35px 0 20px',
  },

  ".seeAllButton": {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },

  ".categories": {
    display: 'flex',
    gap: '14px',
    overflowX: 'auto',
    padding: '20px',
    margin: '-20px',
    height: '100%'
  },

  ".restaurants": {
    margin: '30px 0',
    display: 'grid',
    gap: '30px',
    gridTemplate: 'auto/repeat(auto-fill,minmax(270px, 1fr))',
    justifyItems: 'center',
    alignItems: 'center',

    [breakpoints.down('md')]: {
      gap: '20px',
    }
  }
}))