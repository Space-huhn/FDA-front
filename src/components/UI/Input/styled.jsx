"use client"
import styled from "@emotion/styled";

export const InputStyled = styled("div")(({theme: {palette}}) => ({
  width: '100%',
  maxWidth: '330px',
  margin: '0 auto',

  '.icon': {
    color: palette.colorText.main,
    background: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '.input': {
    backgroundColor: palette.colorCanvas.dark,
    padding: '10px',
    borderRadius: '8px',
    fontSize: '16px',
    color: palette.colorText.main,
    outlineWidth: '1px',
    width: '100%',
  },

  '.input:placeholder': {
    color: palette.colorText.main,
    padding: '10px',
    borderRadius: '8px',
  },

  '.inputWrapper': {
    position: 'relative',
    marginTop: '10px',
  },

  '.showButton': {
    position: 'absolute',
    right: '10px',
    zIndex: '10',
    top: '50%',
    background: 'none',
    transform: 'translateY(-50%)',
  },

  '.error': {
    outline: '2px solid red'
  }
}))