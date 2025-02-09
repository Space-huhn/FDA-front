"use client"
import styled from "@emotion/styled";

export const ImageCoverStyled = styled("div")(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  overflow: 'hidden',

  'img': {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',/* Ensures the image covers the container */
    maxWidth: '100%', /* Prevents stretching beyond the container size */
  }
}))
