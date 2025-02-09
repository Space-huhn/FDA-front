import styled from "@emotion/styled";

export const RecentKeywordsStyled = styled("div")(({theme: {palette}}) => ({
  ".keyWordsWrapper": {
    display: 'flex',
    gap: '10px',
    marginTop: '12px',
    overflowX: 'auto',
  },

  ".keyWord": {
    padding: '13px 20px',
    borderRadius: '33px',
    marginBottom: '12px',
    border: `2px solid ${palette.colorCanvas.disableColor}`,
  }
}))