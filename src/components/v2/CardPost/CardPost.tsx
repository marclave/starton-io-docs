/*
| Developed by Starton
| Filename : CardPost
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { BoxProps, Chip, ChipProps, Grid, styled, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import { StartonType } from '@starton/react-ui-iconography'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface CardPostProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	boxProps?: BoxProps
	date: string
	title: string
	labels?: Array<ChipProps>
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const CardPostStyled = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
	borderWidth: 1,
	borderStyle: 'solid',
	borderColor: theme.palette.divider,
	padding: theme.spacing(2),
	backgroundColor: 'transparent',
	justifyContent: 'space-between',
	minHeight: 200,
	transition: theme.transitions.create(['background-color']),
	width: '100%',
	'& .MuiSvgIcon-root': {
		transition: theme.transitions.create(['transform']),
	},
	'&:hover': {
		backgroundColor: theme.palette.background.paper2,
	},
}))

const ChipStyled = styled(Chip)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.hover,
	color: theme.palette.secondary.light,
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const CardPost: React.FC<CardPostProps> = (props) => {
	const { children, title, date, boxProps, labels, ...anchorProps } = props

	// Render
	//--------------------------------------------------------------------------
	return (
		<a {...anchorProps} style={{ width: 'fit-content' }}>
			<CardPostStyled width="fit-content" {...boxProps}>
				<Box display="flex" flexDirection="column" gap={1}>
					<Box display="flex" justifyContent="space-between">
						<Typography color="text.secondary" variant="caption">
							{date}
						</Typography>
						<StartonType sx={{ width: 100, height: 16 }} />
					</Box>
					<Box display="flex" flexDirection="column" gap={1}>
						<Box component="span" border="2px solid" borderColor="primary.main" width={42} />
						<Typography variant="h4" component={'h2'} color="text.primary">
							{title}
						</Typography>
					</Box>
				</Box>
				<Box display="flex" gap={2}>
					{labels && labels.map((chip, index) => <ChipStyled key={index} {...chip} />)}
				</Box>
			</CardPostStyled>
		</a>
	)
}
