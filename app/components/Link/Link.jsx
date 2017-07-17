import React, { PureComponent } from 'react'
import { string, func } from 'prop-types'
import noop from 'noop3'
import {
	Link as ToolboxLink,
} from 'react-toolbox'
import bem from 'bem-cn'
import './Link.css'

const b = bem('Link')

export default class Link extends PureComponent {
	static propTypes = {
		iconName: string,
		children: string.required,
		onClick: func,
	}

	static defaultProps = {
		onClick: noop,
	}

	render() {
		const {
			iconName,
			children,
			onClick,
		} = this.props

		return <div className={b}>
			<ToolboxLink
				label={children}
				icon={iconName}
				onClick={onClick}
			/>
		</div>
	}
}
