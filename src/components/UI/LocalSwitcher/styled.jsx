"use client"
import styled from "@emotion/styled";
import themeClassic from "@/themes/classic";

export const LocalSwitcherStyled = styled("div")(() => ({
  position: 'relative',
  borderRadius: '6px',
  padding: '4px 12px',
  background: themeClassic.palette.primary.contrastText,

  ".switcherButton": {
    color: themeClassic.palette.primary.main,
    fontWeight: '700',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    gap: '5px',
    transition: 'all .6s ease-out',
  },

  ".arrow": {
    transition: 'all .6s ease-out',
    color: themeClassic.palette.primary.main,
  },

  ".arrow.active": {
    transform: 'rotate(180deg)'
  },

  ".list": {
    boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
    left: '0px',
    top: '36px',
    position: 'absolute',
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: themeClassic.palette.primary.contrastText,
    borderRadius: '6px',
    padding: '8px 12px',
    opacity: '0',
    transition: 'all .6s ease-out',
  },

  ".list.visible": {
    display: 'flex',
    opacity: '1',
  },

  ".link": {
    color: themeClassic.palette.primary.main,
    padding: '2px 12px',
    textTransform: 'uppercase',
    fontWeight: '700',
    display: 'inline-block',
  },
}))