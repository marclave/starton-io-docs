/*
| Developed by Starton
| Filename : StartonFooterHead
| Author : Calixte DE TOURRIS (calixte@starton.com)
*/

import React from 'react'
import { Avatar, Box, styled } from '@mui/material'
import { StartonType } from '@starton/react-ui-iconography'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StartonFooterHeadProps {
	children: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const FooterHeadStyled = styled(Box)(({ theme }) => ({
	padding: theme.spacing(3),
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	flexDirection: 'column',
	gap: theme.spacing(3),
	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(7, 9, 5),
		flexDirection: 'row',
	},
}))

const StartonLogoContainer = styled(Avatar)(({ theme }) => ({
	backgroundColor: 'transparent',
	'&, & svg': {
		width: theme.spacing(11.625),
		height: theme.spacing(2.5),
	},
	[theme.breakpoints.up('md')]: {
		'&, & svg': {
			width: theme.spacing(38.5),
			height: theme.spacing(8.25),
		},
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StartonFooterHead: React.FC<StartonFooterHeadProps> = (props) => {
	const { children } = props

	// Render
	//--------------------------------------------------------------------------
	return (
		<FooterHeadStyled>
			<StartonLogoContainer variant="square">
				<StartonType fill="black" />
			</StartonLogoContainer>
			<Box display="flex" gap={1} flexWrap={'wrap'} justifyContent={{ xs: 'center', md: 'flex-end' }}>
				{children}
			</Box>
		</FooterHeadStyled>
	)
}
