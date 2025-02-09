import styled from "@emotion/styled";

export const CustomCustomSelectStyled = styled('div')(({theme: {palette}}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
  position: 'relative',

  ".dropdownHeader": {
    padding: '5px 0px',
    cursor: 'pointer',
    borderRadius: '6px',
    width: '200px',
    boxShadow: '0 0 0 0 #000, 0 0 0 0 #000, 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: palette.primary.main,
  },

  ".border": {
    padding: '10px 20px',
    border: `1px solid ${palette.secondary.main}`,
  },

  '.dropdownBody': {
    display: 'block',
    boxShadow: ' 0 0 0 0 #000, 0 0 0 0 #000, 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    marginTop: '5px',
    opacity: '0',
    transform: 'translate(-50px, 0)',
    transition: 'all .3s ease-in-out',
    background: '#fff',
    position: 'absolute',
    bottom: '0',
    left: '110%',
    minWidth: '200px',
    zIndex: '-1',
    color: '#000',
    maxHeight: '150px',
    overflowX: 'hidden',
    overflowY: 'auto',

  },

  ".dropdownBody.open": {
    opacity: '1',
    transform: 'translate(0, 0)',
    zIndex: '10',
  },

  ".dropdownItem": {
    padding: '8px',
    display: 'block',
    transition: 'all .2s ease-in-out',
  },

  ".dropdownItem:hover": {
    cursor: 'pointer',
    background: palette.secondary.main,
    color: palette.primary.main,
  },

  '.dropdownItemDot': {
    opacity: '0',
    color: '#91A5BE',
    transition: 'all .2s ease-in-out',
  },

  ".optionGroup": {
    padding: '10px 3px',
    backgroundColor: palette.secondary.main,
    color: palette.secondary.contrastText,
  },

  ".dropdownItemDot.selected": {
    opacity: '1',
  },

  ".icon": {
    fontSize: '13px',
    color: '#91A5BE',
    transform: 'rotate(0deg)',
    transition: 'all .2s ease-in-out',
  },

  ".icon.open": {
    transform: 'rotate(-90deg)',
  },

  ".dropdownHeader.disable": {
    color: 'rgba(0,0,0,0.3)'
  },

  ".disable.border": {
    border: '1px solid rgba(0,0,0,0.3)',
  },

  ".disable .icon path": {
    fill: 'rgba(0,0,0,0.3)',
  },

  ".default": {
    color: 'rgba(0,0,0,0.3)'
  },

  ".dropdownHeader.error": {
    border: '2px solid red'
  }
}))