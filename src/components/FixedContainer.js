import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseLine';
import Typography from '@material-ui/core/Typography';
import Container  from '@material-ui/core/Container';

export default function FixedContainer() {
	return (
		<React.Fragment>
			<CssBaseLine />
			<Container fixed>
				<Typography component="div"
					style={{ backgroundColor: '#282c34', 'height' : '100vh' }} />
			</Container>
		</React.Fragment>
	);
}
