import React from 'react';
import {RecentKeywordsStyled} from "@/components/UI/RecentKeywords/styled";
import {Typography} from "@mui/material";

const RecentKeywords = ({arrayOfKeywords}) => {
  return (
    <RecentKeywordsStyled>
      <Typography variant="subtitle1" color="darker">
        Recent Keywords
      </Typography>

      <div className="keyWordsWrapper">
        {arrayOfKeywords.map(word => (
          <div key={word} className="keyWord">
            <Typography variant="subtitle2" color="darker">
              {word}
            </Typography>
          </div>
        ))}
      </div>
    </RecentKeywordsStyled>
  );
};

export default RecentKeywords;